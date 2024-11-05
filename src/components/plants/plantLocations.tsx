import { useState } from "react";

const PlantLocations = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const plantLocations: string[] = [
    "Bedroom",
    "Living Room",
    "Office",
    "Kitchen",
    "Bathroom",
    "Balcony",
    "Dining Room",
    "Hallway",
    "Patio",
    "Garden",
    "Sunroom",
    "Basement",
    "Attic",
    "Garage",
    "Porch",
  ];

  return (
    <div className="flex md:max-w-[1400px] md:px-4 max-w-[300px] gap-2 w-full mt-4 font-semibold overflow-x-auto whitespace-nowrap py-2" id="locations-section">
      {plantLocations.map((plantLocation, index) => (
        <p
          key={index}
          onClick={() => setSelectedLocation(plantLocation)}
          className={selectedLocation === plantLocation ? "text-white bg-[#4F6F52] scale-105 px-2 rounded-lg ease-in-out duration-700 hover:cursor-pointer" : "hover:cursor-pointer"}
          id={`location-${index}`}
        >
          {plantLocation}
        </p>
      ))}
    </div>
  );
};

export default PlantLocations;
