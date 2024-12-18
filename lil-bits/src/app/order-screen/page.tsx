"use client";
import { useState, useEffect } from "react";

// Define the interface for order form data
interface OrderFormData {
  date: string;
  time: string;
  guests: number;
  email: string;
}

export default function OrderScreen() {
  // Apply the interface to the useState hook
  const [formData, setFormData] = useState<OrderFormData>({
    date: "",
    time: "",
    guests: 1,
    email: "",
  });
  const [error, setError] = useState<string | null>(null);

  // Clear localStorage when the page loads
  useEffect(() => {
    localStorage.removeItem("orderDetails");
  }, []);

  // Function to validate email
  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  // Function to validate that the selected date is a weekday
  const isWeekday = (date: string) => {
    const day = new Date(date).getDay();
    return day >= 1 && day <= 5; // 1 = Monday, 5 = Friday
  };

  // Function to validate time (ensure it's between 16:00 and 23:00)
  const isValidTime = (time: string) => {
    const [hour, minute] = time.split(":").map(Number);
    return hour >= 16 && hour < 23;
  };

  // Handle form submission and save data to localStorage
  const handleSubmit = () => {
    const { email, date, time, guests } = formData;

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!date || !time || !guests) {
      setError("Please fill out all fields.");
      return;
    }
    if (!isWeekday(date)) {
      setError("Please select a weekday (Mon-Fri).");
      return;
    }
    if (!isValidTime(time)) {
      setError("Please select a time between 16:00 and 23:00.");
      return;
    }
    setError(null);

    // Save new data to localStorage
    localStorage.setItem("orderDetails", JSON.stringify(formData));

    // Redirect to the receipt page
    window.location.href = "/receipt";
  };

  const today = new Date().toISOString().split("T")[0];

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 16; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedTime = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        times.push(formattedTime);
      }
    }
    return times;
  };

  const timeOptions = generateTimeOptions();

  return (
    <div className="flex container mx-auto p-6 space-y-6">
      <div className="container mx-auto p-6 space-y-6">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Order Your Meal
        </h1>

        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <div>
            <label
              htmlFor="date"
              className="block text-lg font-semibold text-gray-700"
            >
              Select Date
            </label>
            <input
              type="date"
              id="date"
              min={today}
              value={formData.date}
              onChange={(e) => {
                if (isWeekday(e.target.value)) {
                  setFormData((prev) => ({ ...prev, date: e.target.value }));
                } else {
                  setError("Please select a weekday (Mon-Fri).");
                }
              }}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            />
          </div>

          <div>
            <label
              htmlFor="time"
              className="block text-lg font-semibold text-gray-700"
            >
              Select Time (Military Time)
            </label>
            <select
              id="time"
              value={formData.time}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, time: e.target.value }))
              }
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            >
              <option value="" disabled>
                Select Time
              </option>
              {timeOptions.map((timeOption) => (
                <option key={timeOption} value={timeOption}>
                  {timeOption}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="guests"
              className="block text-lg font-semibold text-gray-700"
            >
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              value={formData.guests}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  guests: Number(e.target.value),
                }))
              }
              min="1"
              max="20"
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-gray-700"
            >
              Enter Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="example@domain.com"
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            />
          </div>

          {error && <p className="text-red-600 text-center mt-4">{error}</p>}
        </div>
      </div>

      {/* Order Flow Box */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4 max-h-52">
        <h3 className="text-xl font-bold text-red-600">Order Flow</h3>
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className="bg-red-600 h-2 rounded-full"
            style={{ width: "75%" }}
          ></div>
        </div>
        <p className="text-sm text-gray-700">Step 3 of 4</p>
        <button
          onClick={handleSubmit}
          className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition-colors w-full"
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
