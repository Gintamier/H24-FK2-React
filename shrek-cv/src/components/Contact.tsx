import SHREK_DATA from "@/Data/shrek";

export default function () {
  const { contact_info } = SHREK_DATA;

  return (
    <div>
      <div className="bg-orange-600 rounded-md flex flex-col items-start justify-center p-1">
        <h1 className="text-white text-2xl font-bold overflow-hidden p-1">
          Contact Information
        </h1>
      </div>
      <div className="text-black">
        <p className="pt-2">
          <strong>Email: </strong>
          {contact_info.email}
        </p>
        <p className="pt-2">
          <strong>Phone: </strong>
          {contact_info.phone}
        </p>
        <p className="pt-2">
          <strong>Location: </strong>
          {contact_info.location}
        </p>
      </div>
    </div>
  );
}
