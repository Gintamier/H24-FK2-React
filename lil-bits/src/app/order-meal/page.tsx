"use client";
import { useEffect, useState } from "react";

interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags?: string;
  price?: number; // Added a price field for the meal
}

export default function OrderPage() {
  const [meal, setMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch a new meal
  const fetchMeal = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://themealdb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      if (response.ok && data.meals && data.meals.length > 0) {
        const fetchedMeal = data.meals[0];
        const mealWithPrice = {
          ...fetchedMeal,
          price: +(Math.random() * (30 - 10) + 10).toFixed(2),
        };
        setMeal(mealWithPrice);
        localStorage.setItem("meal", JSON.stringify(mealWithPrice)); // Update localStorage with the new meal
      } else {
        setError("Failed to fetch meal. Please try again later.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeal(); // Always fetch a new meal on reload
  }, []); // Empty dependency array ensures it runs only once when the component is mounted

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
      <div className="container mx-auto p-6 space-y-6">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Today's Special.
        </h1>
        {meal && (
          <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <div className="flex justify-center">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-96 h-auto rounded-lg shadow-lg"
              />
            </div>
            <h2 className="text-3xl font-semibold text-center">
              {meal.strMeal}
            </h2>
            <p className="text-gray-700 text-center">
              <strong>Category:</strong> {meal.strCategory}
            </p>
            <p className="text-gray-700 text-center">
              <strong>Area:</strong> {meal.strArea}
            </p>
            <p className="text-green-600 text-center font-bold text-2xl">
              ${meal.price}
            </p>
            <p className="text-gray-700 text-justify">
              <strong>Instructions:</strong> {meal.strInstructions}
            </p>
            <div className="flex justify-center">
              <button
                onClick={fetchMeal}
                className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition-colors mt-4"
              >
                Request New Meal
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Order Flow Box */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4 max-h-52">
        <h3 className="text-xl font-bold text-red-600">Order Flow</h3>
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className="bg-red-600 h-2 rounded-full"
            style={{ width: "25%" }}
          ></div>
        </div>
        <p className="text-sm text-gray-700">Step 1 of 4: Select your meal</p>
        <button
          onClick={() => (window.location.href = "/order-drinks")}
          className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition-colors w-full"
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
