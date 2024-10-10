import React, { useState } from "react";

export default function ContactForm() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Request",
    message: "",
  });

  // Handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-[#f4f0e3] rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#416d79]">
        Contact Us
      </h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-[#805a51]">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="bg-white w-full mt-1 p-2 border border-[#805a51] rounded text-[#416d79] focus:outline-none focus:border-[#d4a83f] focus:ring-1 focus:ring-[#d4a83f]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-[#805a51]">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="bg-white w-full mt-1 p-2 border border-[#805a51] rounded text-[#416d79] focus:outline-none focus:border-[#d4a83f] focus:ring-1 focus:ring-[#d4a83f]"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-[#805a51]">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="bg-white w-full mt-1 p-2 border border-[#805a51] rounded text-[#416d79] focus:outline-none focus:border-[#d4a83f] focus:ring-1 focus:ring-[#d4a83f]"
          >
            <option value="General Request">General Request</option>
            <option value="Restaurants">Restaurants</option>
            <option value="Office">Office</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-[#805a51]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="bg-white w-full mt-1 p-2 border border-[#805a51] rounded text-[#416d79] focus:outline-none focus:border-[#d4a83f] focus:ring-1 focus:ring-[#d4a83f]"
            rows="4"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-[#805a51] text-white rounded hover:bg-[#90685e] transition-all duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
