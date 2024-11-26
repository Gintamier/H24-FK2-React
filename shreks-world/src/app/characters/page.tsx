"use client";

import Link from "next/link";
import Image from "next/image";
import { Character } from "../types";
import { useCounter } from "@/app/context/counterContext";

const characters: Record<string, Character> = {
  shrek: {
    name: "Shrek",
    description: "A lovable ogre.",
    imageUrl:
      "https://ironusa.vtexassets.com/arquivos/ids/200260-800-1067?v=637971340212270000&width=800&height=1067&aspect=true",
  },
  fiona: {
    name: "Princess Fiona",
    description: "A princess with an ogre form.",
    imageUrl:
      "https://static.miraheze.org/greatcharacterswiki/5/5a/Fiona_Ogre_Forever_After_Portrait.png",
  },
  donkey: {
    name: "Donkey",
    description: "Shrek's loyal (and talkative) friend.",
    imageUrl:
      "https://static.wikia.nocookie.net/dreamworks/images/1/18/Donkey_Profile.jpg/revision/latest?cb=20231223024256",
  },
};

export default function Characters() {
  const { incrementCounter, counter } = useCounter();
  return (
    <div className="flex flex-col">
      <p onClick={incrementCounter}>Increment counter here!</p>
      <p>Current count: {counter}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Object.entries(characters).map(([slug, character]) => (
          <Link
            key={slug}
            href={`/characters/${slug}`}
            className="bg-green-100 rounded-lg p-6 shadow hover:bg-green-200"
          >
            <Image
              src={character.imageUrl}
              alt={character.name}
              width={300}
              height={300}
              className="rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold text-green-800">
              {character.name}
            </h2>
            <p>{character.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
