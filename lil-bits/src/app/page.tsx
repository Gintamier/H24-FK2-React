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
            onClick={() => {
              window.location.href = "/order-meal";
            }}
            className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition-colors w-full"
          >
            Order
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
          />
          <button className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition-colors w-full">
            Find
          </button>
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
    </div>
  );
}
