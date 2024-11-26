"use client";

import { useCounter } from "./context/counterContext";
import Link from "next/link";
import "@/app/styles/globals.css";

export default function Home() {
  const { counter } = useCounter();

  return (
    <div className="relative text-center bg-cover bg-center min-h-screen">
      <div className="bg-green-800 bg-opacity-70 py-20 px-6">
        <p className="text-sm font-medium text-green-200 mb-4">
          Counter value: {counter}
        </p>
        <h1 className="text-5xl font-extrabold text-red-500 drop-shadow-lg">
          Welcome to Shrek's World!
        </h1>
        <p className="mt-6 text-lg text-green-100 max-w-2xl mx-auto">
          Explore the magical swamp and meet its quirky inhabitants!
        </p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 px-6 py-10 bg-green-50 bg-opacity-90 shadow-lg">
        {[
          {
            title: "Characters",
            description: "Meet Shrek, Fiona, Donkey, and more!",
            href: "/characters",
          },
          {
            title: "Locations",
            description: "Visit iconic places like Shrek's swamp and Duloc.",
            href: "/locations",
          },
          {
            title: "About",
            description: "Learn more about the Shrek universe!",
            href: "/about",
          },
        ].map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="bg-green-200 rounded-lg p-6 shadow-md hover:bg-green-300 hover:shadow-lg transition-all transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold text-green-900 mb-2">
              {card.title}
            </h2>
            <p className="text-green-700">{card.description}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
