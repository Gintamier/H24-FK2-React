import Link from "next/link";
import Image from "next/image";
import { Location } from "../../../types";

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

interface LocationPageProps {
  params: Promise<{ locationId: string }>;
}

export default async function Locations({ params }: LocationPageProps) {
  const awaitedParams = await params;
  const location = locations[awaitedParams.locationId];
  return (
    <div>
      <Image
        src={location.imageUrl}
        alt={location.name}
        width={300}
        height={200}
        className="rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-green-800">
          {location.name}
        </h2>
        <p>{location.description}</p>
      </div>
    </div>
  );
}
