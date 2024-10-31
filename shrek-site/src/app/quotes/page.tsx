"use client";
import { useState } from "react";
import quotesData from "./data/quotes.json";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const [quote, setQuote] = useState("");

  const showRandomQuote = () => {
    const randomIndex = Math.floor(
      Math.random() * quotesData.shrekQuotes.length
    );
    setQuote(quotesData.shrekQuotes[randomIndex]);
  };

  return (
    <div className="flex flex-grow flex-col justify-center items-center text-black text-2xl">
      <p>{quote}</p>

      <button
        className="h-10 w-60 bg-green-800 text-white rounded-md mt-2 hover:bg-green-600 text-lg"
        onClick={showRandomQuote}
      >
        Click Me for a Shrek Quote!
      </button>
    </div>
  );
}
