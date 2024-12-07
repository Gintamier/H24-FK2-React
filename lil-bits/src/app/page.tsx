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
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:3001/api/order/${email}`);
      const data = await response.json();

      if (response.ok && data.email) {
        setUserInfo(data);
      } else {
        setError("No order found for this email.");
        setUserInfo(null);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-10">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-10 tracking-tight">
        Welcome to Lil Bits
      </h1>

      {/* Flex Container for Carousel and Order Flow Box */}
      <div className="flex space-x-10 mb-10">
        {/* Carousel Section */}
        <div className="flex-1">
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
        <div className="w-1/3 bg-white p-8 rounded-lg shadow-xl space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            Order Flow Box
          </h3>
          <p className="text-gray-700 text-sm">
            This section will show the flow of the order process.
          </p>
          <button
            onClick={() => {
              window.location.href = "/order";
            }}
            className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition-colors w-full"
          >
            Start Order
          </button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-10">
        <div className="flex-1 bg-white p-8 rounded-lg shadow-xl space-y-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Find Your Order
          </h2>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 border border-gray-300 rounded-xl w-full focus:ring-2 focus:ring-green-500 shadow-md"
          />
          <button
            onClick={handleEmailCheck}
            className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 transition-all duration-200 w-full"
          >
            {loading ? "Checking..." : "Check Order"}
          </button>

          {error && <p className="text-red-600 text-center mt-4">{error}</p>}
        </div>

        <div className="lg:w-1/3 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Content Box</h3>
            <p className="text-gray-700 text-sm">
              This section will display additional relevant content.
            </p>
          </div>
        </div>
      </div>

      {/* Display User Information */}
      {userInfo && (
        <div className="bg-green-50 p-8 rounded-lg shadow-xl mt-10">
          <h2 className="text-4xl font-semibold text-center text-gray-800">
            Welcome Back!
          </h2>
          <p className="mt-4 text-lg text-gray-700 text-center">
            Your previous order: <strong>{userInfo.dish.name}</strong>
          </p>
          <p className="mt-2 text-gray-600 text-center">
            {userInfo.dish.description}
          </p>
          <div className="mt-6 text-center">
            <img
              src={userInfo.dish.imageSource}
              alt={userInfo.dish.name}
              className="mx-auto w-72 h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
