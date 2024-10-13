import SHREK_DATA from "@/Data/shrek";

export default function () {
  const { education } = SHREK_DATA;

  return (
    <div>
      <div className="bg-orange-600 rounded-md flex flex-col items-start justify-center p-1">
        <h1 className="text-white text-2xl font-bold overflow-hidden p-1">
          Education
        </h1>
      </div>
      <div className="text-black p-4">
        <p>
          <strong>Degree:</strong> {education.degree}
        </p>
        <p>
          <strong>Institution:</strong> {education.institution}
        </p>
        <p>
          <strong>Period:</strong> {education.period}
        </p>
      </div>
    </div>
  );
}
