import SHREK_DATA from "@/Data/shrek";

export default function () {
  const { pfp, name, description } = SHREK_DATA;

  return (
    <div className="bg-green-600 h-1/5 w-6/6 rounded-t-2xl flex flex-col items-center justify-center mx-auto p-4">
      <img
        src={pfp}
        alt={name}
        className="border-2 border-white rounded-full h-32 w-32 mb-3 overflow-hidden"
      />
      <h1 className="text-white text-3xl font-bold overflow-hidden">{name}</h1>
      <p className="text-white text-lg italic overflow-hidden">{description}</p>
    </div>
  );
}
