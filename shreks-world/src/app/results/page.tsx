"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();

  const q = searchParams.get("q");

  return (
    <div className="flex-col flex">
      <p className="mt-10">Search: {q}</p>
      <Link href="/search">go back to search</Link>
    </div>
  );
}
