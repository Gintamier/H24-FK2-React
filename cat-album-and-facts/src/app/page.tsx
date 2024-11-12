"use client";
import React, { useState, useEffect } from "react";

const CatGallery: React.FC = () => {
  const [catImages, setCatImages] = useState<string[]>([]);
  const [loadingImages, setLoadingImages] = useState<boolean>(true);
  const [loadingFact, setLoadingFact] = useState<boolean>(false);
  const [catFact, setCatFact] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const fetchImages = () => {
    setLoadingImages(true);
    setSelectedImage(null);
    const images = Array.from(
      { length: 9 },
      () => "https://cataas.com/cat?random=" + Math.random()
    );
    setCatImages(images);
    setLoadingImages(false);
  };

  const fetchCatFact = async () => {
    setLoadingFact(true);
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    setCatFact(data.fact);
    setLoadingFact(false);
  };

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
    fetchCatFact();
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500 space-y-4">
      <h1 className="text-black text-3xl font-bold m-4">Cat Gallery</h1>
      {loadingImages ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {catImages.map((src, index) => (
            <div
              key={index}
              className="relative w-24 h-24 overflow-hidden rounded-lg cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <img
                src={src}
                alt={`Cat ${index + 1}`}
                className="object-cover w-full h-full"
              />
              {selectedImage === index && (
                <div className="text-xs absolute inset-0 flex text-center justify-center bg-black bg-opacity-50 text-white rounded-lg">
                  {loadingFact ? <p>Loading...</p> : <p>{catFact}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <button
        onClick={fetchImages}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Reload Images
      </button>
    </div>
  );
};

export default CatGallery;
