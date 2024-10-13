import SHREK_DATA from "@/Data/shrek";

export default function () {
  const { quote } = SHREK_DATA;

  return (
    <div className="bg-yellow-200 h-1/5 w-6/6 rounded-b-2xl flex flex-col items-center justify-center mx-auto p-4">
      <p className="text-gray-900 text-sm italic">{quote}</p>
    </div>
  );
}
