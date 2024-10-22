import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-grow flex-col justify-around items-center">
      <h1 className="text-5xl font-bold text-white">
        Welcome to Shrek's Swamp!
      </h1>
      <p className="text-black text-lg">
        Shrek is an ogre who enjoys his solitude, but adventure always finds
        him. Join shrek and his friends on their funny, exciting adventures!
      </p>
      <Image
        src={
          "https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png"
        }
        width={150}
        height={150}
        alt="Shrek"
      />
    </div>
  );
}
