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
  const foodData = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThWAMrZ5K-EcN1bIhaga01YOyEqnJuTOx7Gg&s",
      name: "Double Classic Beef Burger",
      description:
        "Juicy double beef patty with lettuce, tomato, and pickles in a toasted bun, w/ side of fries.",
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
        "https://anourishingplate.com/wp-content/uploads/2022/11/frozen-vegetable-stir-fry-recipe.jpg",
      name: "Vegetable Stir Fry",
      description:
        "A colorful medley of fresh vegetables sautéed with soy sauce and ginger.",
    },
    {
      image: "https://i.ytimg.com/vi/eQZEf3NCCo4/maxresdefault.jpg",
      name: "California Sushi Roll",
      description:
        "Crab, avocado, and cucumber wrapped in seasoned rice and nori.",
    },
    {
      image:
        "https://www.pccmarkets.com/wp-content/uploads/2017/08/pcc-rosemary-grilled-salmon-flo.jpg",
      name: "Grilled Salmon",
      description: "Perfectly grilled salmon filet with a lemon-butter glaze.",
    },
    {
      image:
        "https://alegumeaday.com/wp-content/uploads/2024/03/Bean-avocado-toast-3.jpg",
      name: "Avocado Toast",
      description:
        "Sliced avocado on toasted whole-grain bread with a sprinkle of salt.",
    },
    {
      image: "https://recipecontent.fooby.ch/11662_3-2_1920-1280.jpg",
      name: "Guacamole and Chips",
      description: "Fresh guacamole served with crispy tortilla chips.",
    },
    {
      image:
        "https://goboldwithbutter.com/BoldWithButter/media/recipe_images/Imported/best-buttermilk-pancakes.jpg?ext=.jpg",
      name: "Buttermilk Pancakes",
      description: "Fluffy pancakes served with maple syrup and butter.",
    },
    {
      image:
        "https://d36fw6y2wq3bat.cloudfront.net/recipes/ensalada-de-pasta-hawaiana/900/ensalada-de-pasta-hawaiana.jpg",
      name: "Hawaiian Pasta",
      description: "Pasta with ham, pineapple, and a creamy cheese sauce.",
    },
    {
      image:
        "https://yupitsvegan.com/wp-content/uploads/2019/04/vegan-chili-square-500x500.jpg",
      name: "Vegetarian Chili",
      description:
        "Hearty chili made with beans, tomatoes, and spices, without the meat.",
    },
  ];

  return (
    <div className="bg-[#f4f0e3] min-h-screen flex flex-col">
      <Navbar menuItems={menuItems} />
      <div className="flex-grow flex-wrap flex justify-center gap-4 p-4">
        {foodData.map((item, index) => (
          <FoodItem
            key={index}
            image={item.image}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
