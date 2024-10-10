import React, { useState } from "react";

export default function Header({ menuItems }) {
  // State to handle the visibility of the dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Event handlers for mouse enter and leave
  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  return (
    <div className="flex items-center justify-between w-full h-20 border-b-[#805a51] border-b-2 border-opacity-50 bg-[#f4f0e3] p-4">
      <img
        className="w-16 h-16"
        src={"./hungry llama.png"}
        alt="Hungry Llama"
      />

      <h1 className="font-poppins text-[#416d79] text-xl font-bold text-center">
        The Hungry Llama
      </h1>

      <div className="relative" onMouseLeave={handleMouseLeave}>
        <button
          id="dropdownHoverButton"
          onMouseEnter={handleMouseEnter}
          className={`font-poppins text-[#416d79] bg-[#805a51] bg-opacity-50 hover:bg-[#90685e] hover:bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-3 py-1.5 text-center inline-flex items-center ${
            dropdownOpen ? "rounded-t-lg" : "rounded-lg"
          }`}
          type="button"
        >
          Menu
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {/* Dropdown menu */}
        <div
          id="dropdownHover"
          className={`absolute left-0 top-full z-10 bg-[#805a51] bg-opacity-90 shadow rounded-b-lg transition-all duration-300 ease-in-out ${
            dropdownOpen ? "block" : "hidden"
          }`}
        >
          <ul
            className="py-2 text-sm text-[#d4a83f] w-full"
            aria-labelledby="dropdownHoverButton"
          >
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="block px-4 py-2 hover:bg-[#ad7060]"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
