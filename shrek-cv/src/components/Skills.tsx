import SHREK_DATA from "@/Data/shrek";

export default function () {
  const { skills } = SHREK_DATA;

  return (
    <div>
      <div className="bg-orange-600 rounded-md flex flex-col items-start justify-center p-1">
        <h1 className="text-white text-2xl font-bold overflow-hidden p-1">
          Skills
        </h1>
      </div>
      <div className="text-black p-4">
        <ul className="list-disc list-inside -ml-4">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
