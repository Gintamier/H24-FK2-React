import Link from "next/link";

const Header = () => {
  return (
    <div className="text-white flex flex-row justify-between w-full h-15 bg-green-950 p-4">
      <Link href={"/"}> Home</Link>
      <Link href={"/quotes"}> Quotes</Link>
      <Link href={"/donkey"}> Donkey</Link>
      <Link href={"/gallery"}> Gallery</Link>
    </div>
  );
};

export default Header;
