import express, { type Express, type Request } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import type { Order } from "./types";

// Initialize default orders and id
let nextId = 2;
let orders: Order[] = [
  {
    id: 1,
    drinks: [
      {
        brewer: "vifilfell",
        category: "beer",
        description: "tasty beer",
        id: "some-uuid",
        imageSource:
          "https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg",
        name: "Gylltur",
        price: 2500,
        qty: 2, // Initial qty for drinks
      },
    ],
    email: "gunnsteinnskula@gmail.com",
    count: 10,
    date: new Date(),
    time: "14:30", // Initial order time
    dish: {
      id: "53051",
      category: "seafood",
      cousine: "Malaysian",
      description:
        "In a medium saucepan over medium heat, stir together coconut milk, water, ground ginger, ginger root, salt, bay leaf, and rice. Cover, and bring to a boil. Reduce heat, and simmer for 20 to 30 minutes, or until done.",
      imageSource:
        "https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg",
      name: "Nasi lemak",
      price: 2500,
    },
  },
];

// Initialize api
const api: Express = express();
api.use(cors());
api.use(express.json());
api.use(bodyParser.urlencoded({ extended: false }));
const port = 3001;

// GET endpoint to get all orders
api.get("/api/orders", (_, res) => {
  console.log("Getting orders:", orders);
  return res.json(orders);
});

// Validation function for order
const isOrder = (body: Order | Record<string, unknown>): body is Order => {
  console.log("Received body:", body); // Log the entire body for debugging

  // Check if 'body.dish' is a valid object and has a 'name' property
  const isDishValid =
    body.dish &&
    typeof body.dish === "object" &&
    "name" in body.dish &&
    typeof (body.dish as { name: string }).name === "string";

  // Check if 'body.date' is a string and a valid date
  const isDateValid =
    typeof body.date === "string" &&
    !isNaN(new Date(body.date as string).getTime());

  // Ensure that body contains all required properties and that they are valid
  const validOrder =
    "email" in body &&
    typeof body.email === "string" &&
    isDishValid && // Check that dish is valid
    "drinks" in body &&
    Array.isArray(body.drinks) &&
    body.drinks.length > 0 &&
    "count" in body &&
    typeof body.count === "number" &&
    body.count > 0 &&
    isDateValid && // Check for valid date string
    "time" in body && // Check for time
    typeof body.time === "string" &&
    body.time.length > 0;

  // Log the missing or invalid fields
  if (!validOrder) {
    console.error("Validation failed. Missing or invalid fields:", {
      email: "email" in body ? body.email : "missing",
      dish: "dish" in body ? body.dish : "missing",
      dishName: isDishValid ? (body.dish as { name: string }).name : "missing",
      drinks: "drinks" in body ? body.drinks : "missing",
      count: "count" in body ? body.count : "missing",
      date: isDateValid ? body.date : "missing or invalid",
      time: "time" in body ? body.time : "missing",
    });
  }

  if (validOrder) {
    if (typeof body.date === "string") {
      body.date = new Date(body.date as string); // Explicitly cast to string
    }
    return true;
  }

  return false;
};

// POST endpoint for creating an order
api.post("/api/create-order", (req: Request<Order>, res) => {
  const emailAlreadyTaken = () => {
    if (!req.body.email) {
      return false;
    }
    return orders.findIndex((order) => order.email === req.body.email) >= 0;
  };

  if (!isOrder(req.body)) {
    res.json({
      success: false,
      error: "Must supply all properties of an order",
    });
    return;
  }

  if (emailAlreadyTaken()) {
    res.json({
      success: false,
      error: "Email already reserved",
    });
    return;
  }

  const order: Order = {
    ...req.body,
    id: nextId,
  };

  orders.push(order);
  nextId += 1;

  return res.json({
    success: true,
    order,
  });
});

// PUT endpoint to update orders
api.put("/api/update-order", (req: Request<Order>, res) => {
  const emailDoesNotExist = () => {
    if (!req.body.email) {
      return false;
    }
    return orders.findIndex((order) => order.email === req.body.email) < 0;
  };

  if (!isOrder(req.body)) {
    res.json({
      success: false,
      error: "Must supply all properties of an order",
    });
    return;
  }

  if (emailDoesNotExist()) {
    res.json({
      success: false,
      error: "Email does not exist, cannot update",
    });
    return;
  }

  orders = orders.map((o) => {
    if (o.email === req.body.email) {
      return req.body;
    }
    return o;
  });

  return res.json({
    success: true,
    order: req.body,
  });
});

// GET endpoint to get order by email
api.get("/api/order/:email", (req, res) => {
  const order = orders.find((order) => order.email === req.params.email);
  if (order) {
    return res.json({
      success: true,
      order,
    });
  }

  res.json({
    success: false,
    error: `Could not find order with email: ${req.params.email}`,
  });
});

// DELETE endpoint to delete order by id
api.delete("/api/order/:id", (req, res) => {
  const orderId = Number.parseInt(req.params.id, 10);
  const order = orders.find((e) => e.id === orderId);
  if (order) {
    orders = orders.filter((e) => e.id !== orderId);
    res.json({
      success: true,
      deletedorder: order,
    });
  } else {
    res.json({
      success: false,
      error: `Could not find order with id=${orderId}`,
    });
  }
});

// DELETE endpoint to delete order by email
api.delete("/api/order/:email", (req, res) => {
  const paramEmail = req.params.email;
  const order = orders.find((e) => e.email === paramEmail);
  if (order) {
    orders = orders.filter((e) => e.email !== paramEmail);
    res.json({
      success: true,
      deletedorder: order,
    });
  } else {
    res.json({
      success: false,
      error: `Could not find order with email=${paramEmail}`,
    });
  }
});

api.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
