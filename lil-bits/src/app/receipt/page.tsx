"use client";
import { useEffect, useState } from "react";

export default function ReceiptPage() {
  const [meal, setMeal] = useState<any>(null);
  const [drink, setDrink] = useState<any>(null);
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [savedMessage, setSavedMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Loading state to manage data fetch
  const [emailExists, setEmailExists] = useState(false); // Check if email already exists

  useEffect(() => {
    const storedMeal = localStorage.getItem("meal");
    const storedDrink = localStorage.getItem("drinkOrderData");
    const storedOrderDetails = localStorage.getItem("orderDetails");

    // Parse data if present
    if (storedMeal) setMeal(JSON.parse(storedMeal));

    if (storedDrink) {
      try {
        const parsedDrink = JSON.parse(storedDrink);
        const formattedDrink = {
          ...parsedDrink.drink, // Extract drink object details
          quantity: parsedDrink.quantity || 0, // Add quantity to the drink object
        };
        setDrink(formattedDrink); // Update state with the formatted drink object
      } catch (error) {
        console.error("Error parsing drink data:", error);
      }
    }

    if (storedOrderDetails) setOrderDetails(JSON.parse(storedOrderDetails));

    setIsLoading(false); // End loading
  }, []);

  // Fallback values for drink data
  const drinkName = drink?.strDrink || "Unnamed Drink";
  const drinkPrice = parseFloat(drink?.price) || 0; // Ensure price is numeric
  const drinkQuantity = parseInt(drink?.quantity) || 0;

  const totalMealPrice = (meal?.price || 0) * (orderDetails?.guests || 0);
  const totalDrinkPrice = drinkPrice * drinkQuantity;
  const totalPrice = totalMealPrice + totalDrinkPrice;

  const checkEmailExists = async (email: string) => {
    try {
      const response = await fetch(`http://localhost:3001/api/order/${email}`);
      const data = await response.json();
      if (data.success && data.order) {
        setEmailExists(true); // Email exists, update order
      } else {
        setEmailExists(false); // Email doesn't exist, create new order
      }
    } catch (error) {
      console.error("Error checking email:", error);
      setEmailExists(false); // Assume email doesn't exist on error
    }
  };

  const handleSaveOrUpdateOrder = async () => {
    const orderPayload = {
      email: orderDetails?.email || "",
      count: orderDetails?.guests || 0,
      date: new Date(orderDetails?.date),
      time: orderDetails?.time || "", // Include time in the payload
      dish: {
        id: meal?.idMeal || `meal-${Date.now()}`,
        category: "meal",
        cousine: meal?.strMeal || "Unknown Meal",
        description: meal?.description || "Delicious meal",
        imageSource: meal?.strMealThumb || "",
        name: meal?.strMeal || "Unnamed Meal",
        price: meal?.price || 0,
      },
      drinks: [
        {
          brewer: drink?.brewer || "Unknown Brewer",
          category: "drink",
          description: drink?.description || "Delicious drink",
          id: drink?.idDrink || `drink-${Date.now()}`,
          imageSource: drink?.strDrinkThumb || "",
          name: drinkName,
          price: drinkPrice,
          qty: drinkQuantity, // Send drink quantity
        },
      ],
    };

    try {
      const method = emailExists ? "PUT" : "POST";
      const url = emailExists
        ? `http://localhost:3001/api/update-order` // Correct API endpoint for updating orders
        : "http://localhost:3001/api/create-order";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderPayload),
      });

      const data = await response.json();
      if (data.success) {
        setSavedMessage(
          emailExists
            ? "Your order has been updated successfully!"
            : "Your order has been saved successfully!"
        );
      } else {
        setSavedMessage(`${data.error}`);
      }
    } catch (error) {
      setSavedMessage("Error saving or updating your order. Please try again.");
    }
  };

  // Check if the email exists when the email field is updated
  useEffect(() => {
    if (orderDetails?.email) {
      checkEmailExists(orderDetails?.email);
    }
  }, [orderDetails?.email]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold text-blue-600">
          Loading your order details...
        </p>
      </div>
    );
  }

  if (!meal || !drink || !orderDetails) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold text-red-600">
          Order information missing. Please go through the order process.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-gray-800">Receipt</h1>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Your Order Summary
        </h2>

        {/* Order Details */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-700">
            Order Details
          </h3>
          <div className="mt-4">
            <p className="text-lg text-gray-600">
              <strong>Date:</strong> {orderDetails.date || ""}
            </p>
            <p className="text-lg text-gray-600">
              <strong>Time:</strong> {orderDetails.time || ""}
            </p>
            <p className="text-lg text-gray-600">
              <strong>Email:</strong> {orderDetails.email || ""}
            </p>
            <p className="text-lg text-gray-600">
              <strong>Guests:</strong> {orderDetails.guests || 0}
            </p>
          </div>
        </div>

        {/* Meal Info */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-700">Meal</h3>
          <div className="flex justify-between items-center mt-4">
            <p className="text-xl text-gray-800">
              {meal.strMeal || "Unnamed Meal"}
            </p>
            <p className="text-lg text-gray-600">x{orderDetails.guests || 0}</p>
            <p className="text-lg text-green-600">
              ${totalMealPrice.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Drink Info */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-700">Drink</h3>
          <div className="flex justify-between items-center mt-4">
            <p className="text-xl text-gray-800">{drinkName}</p>
            <p className="text-lg text-gray-600">x{drinkQuantity}</p>
            <p className="text-lg text-green-600">
              ${totalDrinkPrice.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Total Price */}
        <div className="p-4 bg-gray-50 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-700">Total Price</h3>
            <p className="text-2xl font-bold text-red-600">
              ${totalPrice.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Save/Update Order Button */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={handleSaveOrUpdateOrder}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            {emailExists ? "Update Order" : "Save Order"}
          </button>
        </div>

        {/* Save Confirmation Message */}
        {savedMessage && (
          <p className="text-center mt-4 text-green-600 font-semibold">
            {savedMessage}
          </p>
        )}
      </div>
    </div>
  );
}
