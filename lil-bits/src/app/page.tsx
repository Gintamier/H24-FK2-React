"use client";
import { useState } from "react";
import "./globals.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [userInfo, setUserInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function to handle email check and fetch data
  const handleEmailCheck = async () => {
    // Validate email format
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      setUserInfo(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:3001/api/order/${email}`);

      // Check if the response is OK
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      // Check for success in the response data
      if (data.success && data.order) {
        setUserInfo(data.order);
      } else {
        setError(data.error || "No order found for this email.");
        setUserInfo(null);
      }
    } catch (err) {
      console.error("Error fetching order:", err);
      setError("Something went wrong. Please try again.");
      setUserInfo(null);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle order page navigation
  const handleOrderPageNavigation = () => {
    // Navigate to the order-meal page
    window.location.href = "/order-meal"; // Adjust URL based on your setup
  };

  return (
    <div className="container mx-auto p-6 space-y-10">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-10 tracking-tight">
        Welcome to Lil Bits
      </h1>

      {/* Top Row: Carousel and Order Flow Box */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Carousel Section */}
        <div className="lg:col-span-2">
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            <div>
              <img
                src="https://via.placeholder.com/600x300?text=Image+1"
                alt="Slide 1"
                className="w-full h-72 object-cover rounded-lg shadow-md"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/600x300?text=Image+2"
                alt="Slide 2"
                className="w-full h-72 object-cover rounded-lg shadow-md"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/600x300?text=Image+3"
                alt="Slide 3"
                className="w-full h-72 object-cover rounded-lg shadow-md"
              />
            </div>
          </Carousel>
        </div>

        {/* Order Flow Box */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-between h-72">
          <h3 className="text-xl font-bold text-center text-red-600">
            Order Flow Box
          </h3>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            praesentium doloremque, laboriosam fugiat sequi odit exercitationem
            beatae harum eius, cumque pariatur adipisci, modi temporibus atque
            alias cupiditate consectetur quaerat illum!
          </p>
          <button
            onClick={handleOrderPageNavigation} // Navigate to order meal page
            className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition-colors w-full"
          >
            {loading ? "Creating..." : "Order"}
          </button>
        </div>
      </div>

      {/* Bottom Row: Find Your Order and Content Box */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Find Your Order */}
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <h3 className="text-lg font-bold text-red-600">Find Your Order</h3>
          <input
            type="email"
            placeholder="Enter Email"
            className="p-2 border border-gray-300 rounded-lg w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />
          <button
            onClick={handleEmailCheck}
            className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition-colors w-full"
          >
            Find
          </button>
          {error && <p className="text-red-500 mt-4">{error}</p>}{" "}
          {/* Display error message */}
        </div>

        {/* Content Box */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold text-red-600">Content Box</h3>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            repellendus nulla optio voluptatem dolorum, itaque error neque,
            recusandae voluptatibus hic rem, praesentium odit rerum. Modi
            tempora repellendus repellat magni fuga.
          </p>
        </div>
      </div>

      {/* Display the order if found */}
      {userInfo && (
        <div className="mt-8 flex flex-col items-center container mx-auto p-6 space-y-8">
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
                {userInfo.date && (
                  <>
                    <p className="text-lg text-gray-600">
                      <strong>Date:</strong>{" "}
                      {new Date(userInfo.date).toLocaleDateString()}
                    </p>
                    <p className="text-lg text-gray-600">
                      <strong>Time: </strong>
                      {userInfo.time}
                    </p>
                  </>
                )}

                <p className="text-lg text-gray-600">
                  <strong>Email:</strong> {userInfo.email}
                </p>
                <p className="text-lg text-gray-600">
                  <strong>Guests:</strong> {userInfo.count}
                </p>
              </div>
            </div>

            {/* Meal Info */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-700">Meal</h3>
              <div className="flex justify-between items-center mt-4">
                <p className="text-xl text-gray-800">
                  {userInfo.dish?.name || "Unnamed Meal"} ($
                  {userInfo.dish?.price || 0})
                </p>
                <p className="text-lg text-gray-600">x{userInfo.count || 0}</p>
                <p className="text-lg text-green-600">
                  $
                  {(userInfo.dish?.price || 0) *
                    (userInfo.count || 0) *
                    (userInfo.guests || 1)}
                </p>
              </div>
            </div>

            {/* Drink Info */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-700">Drink</h3>
              <div className="flex flex-col">
                {userInfo.drinks?.map((drink: any, index: number) => (
                  <div
                    key={index}
                    className="flex justify-between items-center mt-4"
                  >
                    <p className="text-xl text-gray-800">
                      {drink.name} (${drink.price})
                    </p>
                    <p className="text-lg text-gray-600">x{drink.qty || 0}</p>
                    <p className="text-lg text-green-600">
                      ${((drink.price || 0) * (drink.qty || 1)).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Price */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-md">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-700">
                  Total Price
                </h3>
                <p className="text-2xl font-bold text-red-600">
                  $
                  {userInfo.dish?.price
                    ? (
                        userInfo.dish?.price * userInfo.count +
                        (userInfo.drinks || []).reduce(
                          (acc: number, drink: any) =>
                            acc + drink.price * drink.qty,
                          0
                        )
                      ).toFixed(2)
                    : "0.00"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
