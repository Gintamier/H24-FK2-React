"use client";

import Link from "next/link";
import { useState } from "react";

const Search = () => {
  const [searchString, setSearchString] = useState("");

  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => setSearchString(event.target.value)}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-10"
      />
      <Link
        href={{ pathname: "/results", query: { q: searchString } }}
        className="bg-blue-500 text-center text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0"
      >
        Search
      </Link>
    </div>
  );
};

export default Search;
