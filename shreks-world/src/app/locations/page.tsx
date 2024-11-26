import Link from "next/link";
import Image from "next/image";
import { Location } from "../types";

const locations: Record<string, Location> = {
  swamp: {
    name: "Shrek's Swamp",
    description: "A peaceful, murky place where Shrek lives.",
    imageUrl:
      "https://news.airbnb.com/wp-content/uploads/sites/4/2023/09/01-Shrek-Airbnb-Exterior-Credit-Alix-McIntosh-1.jpg?fit=2500%2C1667",
  },
  duloc: {
    name: "Duloc",
    description: "The land of Lord Farquaad.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqHnAy4ZmUW6KGxRLjVzcpPxagAn0xoabEwA&s",
  },
};

export default function LocationsList() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
        Explore Locations
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(locations).map(([id, location]) => (
          <Link
            key={id}
            href={`/locations/${id}/details`}
            className="bg-green-100 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
          >
            <div>
              <Image
                src={location.imageUrl}
                alt={location.name}
                width={400}
                height={250}
                className="rounded-t-lg w-full"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-green-800">
                  {location.name}
                </h2>
                <p className="text-gray-700 mt-2">{location.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
