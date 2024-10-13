import SHREK_DATA from "@/Data/shrek";

export default function () {
  const { workexperience } = SHREK_DATA;

  return (
    <div>
      <div className="bg-orange-600 rounded-md flex flex-col items-start justify-center p-1">
        <h1 className="text-white text-2xl font-bold overflow-hidden p-1">
          Work Experience
        </h1>
      </div>
      <div className="text-black p-4">
        {workexperience.map((job, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-lg font-bold">{job.title}</h2>
            <p className="text-sm italic">
              {job.location} • {job.period}
            </p>
            <p className="text-base">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
