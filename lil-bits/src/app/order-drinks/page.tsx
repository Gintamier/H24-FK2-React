"use client";
import { useEffect, useState } from "react";

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  price: number;
}

export default function DrinksPage() {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDrinkId, setSelectedDrinkId] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  // Fetch drinks on mount
  useEffect(() => {
    const fetchDrinks = async () => {
      setLoading(true);
      try {
        const requests = Array.from({ length: 12 }, () =>
          fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(
            (res) => res.json()
          )
        );

        const results = await Promise.all(requests);

        const formattedDrinks: Drink[] = results
          .map((result) => {
            const drink = result.drinks[0];
            if (
              !drink ||
              !drink.idDrink ||
              !drink.strDrink ||
              !drink.strDrinkThumb
            ) {
              console.warn("Incomplete drink data:", drink);
              return null;
            }
            return {
              idDrink: drink.idDrink,
              strDrink: drink.strDrink,
              strDrinkThumb: drink.strDrinkThumb,
              price: +(Math.random() * (15 - 5) + 5).toFixed(2),
            };
          })
          .filter(Boolean) as Drink[];

        setDrinks(formattedDrinks);
      } catch (err) {
        setError("Failed to fetch drinks. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDrinks();
  }, []);

  // Retrieve saved drink data on mount
  useEffect(() => {
    const savedOrderData = localStorage.getItem("drinkOrderData");
    if (savedOrderData) {
      try {
        const orderData = JSON.parse(savedOrderData);
        setSelectedDrinkId(orderData.drink.idDrink);
        setQuantity(orderData.quantity);
      } catch (e) {
        console.error("Failed to parse saved order data:", e);
        localStorage.removeItem("drinkOrderData");
      }
    }
  }, []);

  // Update localStorage
  const updateLocalStorage = (selectedDrink: Drink, newQuantity: number) => {
    const orderData = {
      drink: {
        idDrink: selectedDrink.idDrink,
        strDrink: selectedDrink.strDrink,
        strDrinkThumb: selectedDrink.strDrinkThumb,
        price: selectedDrink.price,
      },
      quantity: newQuantity,
      date: new Date(),
    };
    localStorage.setItem("drinkOrderData", JSON.stringify(orderData));
  };

  const handleSelectDrink = (idDrink: string) => {
    const selectedDrink = drinks.find((drink) => drink.idDrink === idDrink);
    if (!selectedDrink) return;

    if (selectedDrinkId === idDrink) {
      setSelectedDrinkId(null);
      setQuantity(1);
      localStorage.removeItem("drinkOrderData");
    } else {
      setSelectedDrinkId(idDrink);
      setQuantity(1);
      updateLocalStorage(selectedDrink, 1);
    }
  };

  const handleQuantityChange = (delta: number) => {
    const newQuantity = Math.max(1, quantity + delta);
    setQuantity(newQuantity);

    if (selectedDrinkId) {
      const selectedDrink = drinks.find(
        (drink) => drink.idDrink === selectedDrinkId
      );
      if (selectedDrink) {
        updateLocalStorage(selectedDrink, newQuantity);
      }
    }
  };

  const handleNext = () => {
    if (selectedDrinkId) {
      const selectedDrink = drinks.find(
        (drink) => drink.idDrink === selectedDrinkId
      );
      if (selectedDrink) {
        updateLocalStorage(selectedDrink, quantity);
        window.location.href = "/order-screen"; // Replace with your next page
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex container mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Drinks Menu
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {drinks.map((drink) => {
          const isSelected = selectedDrinkId === drink.idDrink;

          return (
            <div
              key={drink.idDrink}
              className={`bg-white shadow-md rounded-lg p-4 flex flex-col items-center space-y-4 relative min-h-80 ${
                isSelected ? "border-4 border-red-500" : ""
              }`}
              onClick={() => handleSelectDrink(drink.idDrink)}
            >
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className="w-32 h-32 object-cover rounded-full shadow-lg"
              />
              <h2 className="text-lg font-semibold text-center">
                {drink.strDrink}
              </h2>
              <p className="text-green-600 font-bold text-xl">${drink.price}</p>
              {isSelected && (
                <div className="absolute bottom-4 flex items-center space-x-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleQuantityChange(-1);
                    }}
                    className="bg-red-500 text-white py-1 px-2 rounded-lg shadow-md hover:bg-red-600 transition-colors"
                  >
                    −
                  </button>
                  <p className="text-lg font-bold">{quantity}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleQuantityChange(1);
                    }}
                    className="bg-green-500 text-white py-1 px-2 rounded-lg shadow-md hover:bg-green-600 transition-colors"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4 max-h-52">
        <h3 className="text-xl font-bold text-red-600">Order Flow</h3>
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className="bg-red-600 h-2 rounded-full"
            style={{ width: "50%" }}
          ></div>
        </div>
        <p className="text-sm text-gray-700">Step 2 of 4: Select your drinks</p>
        <button
          onClick={handleNext}
          className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition-colors w-full"
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
