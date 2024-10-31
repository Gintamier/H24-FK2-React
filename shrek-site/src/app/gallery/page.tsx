import React from "react";
import Image from "next/image";

const shrekImages = [
  {
    src: "https://media.nbclosangeles.com/2021/10/TLMD-Shrek.jpg?quality=85&strip=all&resize=1200%2C675",
    alt: "Shrek",
  },
  {
    src: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/05/shrek-fiona-in-human-form-and-in-ogre-form-at-her-wedding-1.jpeg",
    alt: "Fiona",
  },
  {
    src: "https://ih1.redbubble.net/image.987890476.3916/raf,360x360,075,t,fafafa:ca443f4786.jpg",
    alt: "Donkey",
  },
  {
    src: "https://i.ytimg.com/vi/FKTXs2NriUI/maxresdefault.jpg",
    alt: "Puss in Boots",
  },
];

const ShrekGallery = () => {
  return (
    <div className="p-4 flex flex-wrap flex-grow justify-center items-center gap-4 ">
      {shrekImages.map((image, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg shadow-lg flex-1 sm:flex-none sm:w-1/2 md:w-1/3 lg:w-1/4"
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="responsive"
            width={400}
            height={400}
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
};

export default ShrekGallery;
