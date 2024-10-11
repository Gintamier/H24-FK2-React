import React from "react";
import FoodItem from "@/components/FoodItem";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";

const menuItems = [
  { name: "Home", link: "./" },
  { name: "Menu", link: "./menu" },
  { name: "About us", link: "./aboutus" },
  { name: "Contact", link: "./contactus" },
];

function App() {
  // Organize the food items by categories
  const starters = [
    {
      image:
        "https://www.jessicagavin.com/wp-content/uploads/2020/01/california-sushi-roll-7-500x500.jpg",
      name: "California Sushi Roll",
      description:
        "Crab, avocado, and cucumber wrapped in seasoned rice and nori.",
    },
    {
      image:
        "https://downshiftology.com/wp-content/uploads/2020/04/Guacamole-Recipe-500x500.jpg",
      name: "Guacamole and Chips",
      description: "Fresh guacamole served with crispy tortilla chips.",
    },
    {
      image:
        "https://cookieandkate.com/images/2018/09/best-red-lentil-soup-recipe-1-550x824.jpg",
      name: "Lentil Soup",
      description: "A warm, spiced red lentil soup with fresh herbs and lemon.",
    },
    {
      image:
        "https://hips.hearstapps.com/del.h-cdn.co/assets/17/21/1495828576-shrimp-cocktail-delish.jpg",
      name: "Shrimp Cocktail",
      description: "Poached shrimp served with tangy cocktail sauce.",
    },
    {
      image:
        "https://assets.epicurious.com/photos/5b74533c7cfe6255111472f7/master/pass/classic-deviled-eggs-recipe-BA-080818.jpg",
      name: "Deviled Eggs",
      description: "Classic deviled eggs with a touch of paprika.",
    },
  ];

  const mains = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThWAMrZ5K-EcN1bIhaga01YOyEqnJuTOx7Gg&s",
      name: "Double Classic Beef Burger",
      description:
        "Juicy double beef patty with lettuce, tomato, and pickles in a toasted bun, w/ side of fries.",
    },
    {
      image:
        "https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Spaghetti-Bolognese-square-FS-0204.jpg",
      name: "Spaghetti Bolognese",
      description:
        "Traditional Italian pasta with a rich and flavorful meat sauce.",
    },
    {
      image:
        "https://thenovicechefblog.com/wp-content/uploads/2019/10/Creamy-Garlic-Parmesan-Chicken-10-500x500.jpeg",
      name: "Garlic Parmesan Chicken",
      description:
        "Juicy chicken breast cooked in a creamy garlic parmesan sauce.",
    },
    {
      image:
        "https://www.pccmarkets.com/wp-content/uploads/2017/08/pcc-rosemary-grilled-salmon-flo.jpg",
      name: "Grilled Salmon",
      description: "Perfectly grilled salmon filet with a lemon-butter glaze.",
    },
    {
      image:
        "https://yupitsvegan.com/wp-content/uploads/2019/04/vegan-chili-square-500x500.jpg",
      name: "Vegetarian Chili",
      description:
        "Hearty chili made with beans, tomatoes, and spices, without the meat.",
    },
    {
      image:
        "https://www.daringgourmet.com/wp-content/uploads/2022/06/Chicken-Parmesan-1-square.jpg",
      name: "Chicken Parmesan",
      description:
        "Breaded chicken breast topped with marinara and melted mozzarella.",
    },
  ];

  const sandwiches = [
    {
      image:
        "https://alegumeaday.com/wp-content/uploads/2024/03/Bean-avocado-toast-3.jpg",
      name: "Avocado Toast",
      description:
        "Sliced avocado on toasted whole-grain bread with a sprinkle of salt.",
    },
    {
      image:
        "https://www.thespruceeats.com/thmb/sPvBOUJwATexzoJESnvk5X9iykU=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/classic-chicken-salad-sandwich-3052218-hero-01-7b3206b426ac466185e7ffbe7414c667.jpg",
      name: "Chicken Salad Sandwich",
      description:
        "Creamy chicken salad with celery and mayo on whole-grain bread.",
    },
    {
      image:
        "https://www.jessicagavin.com/wp-content/uploads/2020/07/blt-sandwich-7-1200.jpg",
      name: "BLT Sandwich",
      description: "Bacon, lettuce, tomato, and mayo on toasted bread.",
    },
    {
      image:
        "https://www.southernliving.com/thmb/J4gqLn-6LbeK7Nj-3YftFBTROpY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/turkey-club-sandwich-ft-blog0718_0_1-2000-5ab93dfb8969478e8f2c0077d268b1e5.jpg",
      name: "Turkey Club Sandwich",
      description:
        "Triple-decker sandwich with turkey, bacon, lettuce, and tomato.",
    },
    {
      image:
        "https://assets.bonappetit.com/photos/5f9026e5936d2c297208166b/1:1/w_2560%2Cc_limit/mushroom-melt-sandwich.jpg",
      name: "Mushroom Melt",
      description: "Sauteed mushrooms with melted Swiss on a toasted roll.",
    },
  ];

  const sides = [
    {
      image:
        "https://goboldwithbutter.com/BoldWithButter/media/recipe_images/Imported/best-buttermilk-pancakes.jpg?ext=.jpg",
      name: "Buttermilk Pancakes",
      description: "Fluffy pancakes served with maple syrup and butter.",
    },
    {
      image:
        "https://www.foodandwine.com/thmb/7BpSJWDh1s-2M2ooRPHoy07apq4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mozzarella-pizza-margherita-FT-RECIPE0621-11fa41ceb1a5465d9036a23da87dd3d4.jpg",
      name: "Cheesy Pizza",
      description:
        "A classic cheese pizza with extra mozzarella and fresh basil.",
    },
    {
      image:
        "https://therecipecritic.com/wp-content/uploads/2020/09/frenchfries-1.jpg",
      name: "French Fries",
      description: "Golden, crispy fries lightly salted.",
    },
    {
      image:
        "https://www.simplyrecipes.com/thmb/ZdCeXuIxGfiEbSrMJW5VSE57MrA=/1332x1332/smart/filters:no_upscale()/Simply-Recipes-Roasted-Vegetables-Lead-5-b50a50c165f14dbab65634978e9b3c66.jpg",
      name: "Roasted Vegetables",
      description: "A medley of roasted seasonal vegetables.",
    },
    {
      image:
        "https://cookieandkate.com/images/2018/06/best-tossed-green-salad-1.jpg",
      name: "Tossed Green Salad",
      description: "Fresh greens with a light vinaigrette dressing.",
    },
  ];

  return (
    <div className="bg-[#f4f0e3] min-h-screen flex flex-col">
      <Navbar menuItems={menuItems} />

      <div className="flex-grow p-4">
        {/* Starters Section */}
        <h2 className="text-3xl font-semibold text-center text-[#7e5951] mb-6">
          Starters
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {starters.map((item, index) => (
            <FoodItem
              key={index}
              image={item.image}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>

        {/* Main Section */}
        <h2 className="text-3xl font-semibold text-center text-[#7e5951] mb-6">
          Mains
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {mains.map((item, index) => (
            <FoodItem
              key={index}
              image={item.image}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>

        {/* Sandwiches Section */}
        <h2 className="text-3xl font-semibold text-center text-[#7e5951] mb-6">
          Sandwiches
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {sandwiches.map((item, index) => (
            <FoodItem
              key={index}
              image={item.image}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>

        {/* Sides Section */}
        <h2 className="text-3xl font-semibold text-center text-[#7e5951] mb-6">
          Sides
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {sides.map((item, index) => (
            <FoodItem
              key={index}
              image={item.image}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
