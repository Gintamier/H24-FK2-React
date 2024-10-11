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
        "https://www.pressurecookrecipes.com/wp-content/uploads/2021/02/california-roll.jpg",
      name: "California Sushi Roll",
      description:
        "Crab, avocado, and cucumber wrapped in seasoned rice and nori.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTojEaODGtJjTXkEbEEW8QjBuvUYg2AcsP45w&s",
      name: "Guacamole and Chips",
      description: "Fresh guacamole served with crispy tortilla chips.",
    },
    {
      image:
        "https://www.feastingathome.com/wp-content/uploads/2024/01/Red-lentil-Soup-Recipe-11.jpg",
      name: "Lentil Soup",
      description: "A warm, spiced red lentil soup with fresh herbs and lemon.",
    },
    {
      image:
        "https://natashaskitchen.com/wp-content/uploads/2019/12/Shrimp-Cocktail-6.jpg",
      name: "Shrimp Cocktail",
      description: "Poached shrimp served with tangy cocktail sauce.",
    },
    {
      image:
        "https://static01.nyt.com/images/2021/10/15/dining/aw-classic-deviled-eggs/aw-classic-deviled-eggs-videoSmall.jpg",
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
        "https://assets.bonappetit.com/photos/5ea8f0df16738800085ad5d2/1:1/w_2560%2Cc_limit/Chicken-Parmesean-Recipe-Lede.jpg",
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
        "https://www.thespruceeats.com/thmb/SFGQIX2KMWIhMhzMipnS759SIqs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-salad-sandwiches-3053167-hero-01-5c829cbb46e0fb0001a0be24.jpg",
      name: "Chicken Salad Sandwich",
      description:
        "Creamy chicken salad with celery and mayo on whole-grain bread.",
    },
    {
      image:
        "https://dyvn6jpt1f0d3.cloudfront.net/wp-content/uploads/2023/10/14154227/BLT-for-recipe-1-6-1200x675.jpeg",
      name: "BLT Sandwich",
      description: "Bacon, lettuce, tomato, and mayo on toasted bread.",
    },
    {
      image:
        "https://assets.bonappetit.com/photos/6358155c6db3ef49ffd91e97/3:2/w_2931,h_1954,c_limit/1025-turkey-club-seo-lede.jpg",
      name: "Turkey Club Sandwich",
      description:
        "Triple-decker sandwich with turkey, bacon, lettuce, and tomato.",
    },
    {
      image:
        "https://sundaysuppermovement.com/wp-content/uploads/2022/11/mushroom-grilled-cheese-featured.jpg",
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
        "https://kirbiecravings.com/wp-content/uploads/2019/09/easy-french-fries-1.jpg",
      name: "French Fries",
      description: "Golden, crispy fries lightly salted.",
    },
    {
      image:
        "https://www.recipetineats.com/tachyon/2021/07/Roasted-Vegetables_56.jpg",
      name: "Roasted Vegetables",
      description: "A medley of roasted seasonal vegetables.",
    },
    {
      image:
        "https://www.foodandwine.com/thmb/uAAAw2CcQbWcxzLBRPJYsTr571U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/HD-201109-r-mixed-greens-herb-salad-182f21683caa4b6da1cee7c52f38239a.jpg",
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
