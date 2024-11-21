import { Character } from "../../types";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const characterData: Record<string, Character> = {
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

interface CharacterPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CharacterPage({ params }: CharacterPageProps) {
  const awaitedParams = await params;
  const character = characterData[awaitedParams.slug];
  if (!character) {
    return notFound();
  }
  return (
    <div className="text-center">
      <Image
        src={character.imageUrl}
        alt={character.name}
        width={400}
        height={400}
        className="rounded-lg mx-auto mb-6"
      />
      <h2 className="text-3xl font-bold text-green-800">{character.name}</h2>
      <p className="mt-4">{character.description}</p>
      <Link
        href="/characters"
        className="mt-6 inline-block text-green-700 hover:text-green-900"
      >
        &larr; Back to Characters
      </Link>
    </div>
  );
}
