import React from "react";

export default function HoverImage() {
  const handleMouseEnter = (e) => {
    const image = e.currentTarget.querySelector("img");
    const sloganBox = e.currentTarget.querySelector(".slogan-box");
    const sloganText = e.currentTarget.querySelector(".slogan-text");

    image.style.transform = "translateX(-100%)";
    sloganBox.style.left = "0";
    sloganText.style.opacity = "1";
  };

  const handleMouseLeave = (e) => {
    const image = e.currentTarget.querySelector("img");
    const sloganBox = e.currentTarget.querySelector(".slogan-box");
    const sloganText = e.currentTarget.querySelector(".slogan-text");

    image.style.transform = "translateX(0)";
    sloganBox.style.left = "100%";
    sloganText.style.opacity = "0";
  };

  return (
    <div
      className="flex justify-center items-center w-[300px] h-[200px] overflow-hidden relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        <img
          src="./hungry llama.png"
          alt="Food"
          className="w-full h-full object-cover transition-transform duration-500"
        />
        <div className="slogan-box absolute top-0 left-full w-full h-full bg-black bg-opacity-70 flex justify-center items-center transition-all duration-500">
          <h2 className="slogan-text text-white text-2xl font-bold opacity-0 transition-opacity duration-500 text-center">
            Where Good Food Meets Great Company <br />- The Hungry Llama
          </h2>
        </div>
      </div>
    </div>
  );
}
