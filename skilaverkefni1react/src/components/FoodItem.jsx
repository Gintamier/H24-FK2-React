import React from "react";

const FoodItem = ({ image, name, description }) => {
  return (
    <div className="relative max-w-xs rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-[#f4f0e3] to-[#d3b03b] transition-all duration-300 ease-in-out">
      <img className="w-full h-40 object-cover" src={image} alt={name} />
      <div className="p-4 h-32 flex flex-col">
        <h3 className="text-lg font-bold text-[#805a51] line-clamp-1">
          {name}
        </h3>
        <p className="text-[#805a51] mt-2 line-clamp-2">{description}</p>
      </div>
      {/* Inner shadow for hover effect */}
      <div className="absolute inset-0 transition-all duration-300 ease-in-out rounded-lg hover:bg-[#7e5951] hover:opacity-30" />
    </div>
  );
};

export default FoodItem;
