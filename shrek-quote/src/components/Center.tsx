import { useState } from "react";
import quotesData from "@/data/quotes.json"; // Ensure this path is correct

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
    <div className="items-center">
      <div className="flex flex-col items-center justify-center text-black">
        <p>{quote}</p>
        <input
          placeholder="Donkey ?"
          className="bg-white w-60 mt-5 p-2 border border-[#000000] rounded text-[#416d79] focus:outline-none focus:border-[#d4a83f] focus:ring-1 focus:ring-[#d4a83f]"
        />
        <button className="h-10 w-52 bg-green-800 text-white rounded-md mt-5 hover:bg-green-600">
          Add Shrek Quote!
        </button>
        <button
          className="h-10 w-60 bg-green-800 text-white rounded-md mt-2 hover:bg-green-600"
          onClick={showRandomQuote}
        >
          Click Me for a Shrek Quote!
        </button>

        <div className="w-60 mt-5">
          <input
            placeholder="Shrek !!"
            className="bg-white w-full p-2 border border-[#000000] rounded text-[#416d79] focus:outline-none focus:border-[#d4a83f] focus:ring-1 focus:ring-[#d4a83f]"
            onChange={(e) => setTypedText(e.target.value)}
          />
          <p className="mt-2 text-black text-lg">You typed: {typedText}</p>
        </div>
      </div>
    </div>
  );
}
