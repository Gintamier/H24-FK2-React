import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-grow flex-col justify-around items-center">
      <h1 className="text-5xl font-bold text-white">Donkey!</h1>
      <div>
        <p className="text-black text-lg"> Donkey loves waffles.</p>
        <p className="text-black text-lg">He's voiced by Norbit.</p>
        <p className="text-black text-lg">
          He married a dragon and had flying donkey-dragon babies!
        </p>
        <p className="text-black text-lg">
          Donkey's catchphrase is: I'm making waffles!
        </p>
      </div>
      <Image
        src={
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8d9b038e-7496-464a-8ca4-32591a0dfb5d/dg98xqk-0c1006c8-2cfa-433a-b577-5efd90d33f01.png/v1/fill/w_435,h_707/donkey_confused_by_asandoval24_dg98xqk-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzA3IiwicGF0aCI6IlwvZlwvOGQ5YjAzOGUtNzQ5Ni00NjRhLThjYTQtMzI1OTFhMGRmYjVkXC9kZzk4eHFrLTBjMTAwNmM4LTJjZmEtNDMzYS1iNTc3LTVlZmQ5MGQzM2YwMS5wbmciLCJ3aWR0aCI6Ijw9NDM1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.V7RpJjMk5jdGclZL7KH-Weam83fBIhag-YMlmuuEBaA"
        }
        width={150}
        height={150}
        alt="Shrek"
      />
    </div>
  );
}
