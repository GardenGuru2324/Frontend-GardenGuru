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
    <div
      className="flex max-w-[300px] gap-2 w-full mt-4 font-semibold overflow-x-auto whitespace-nowrap"
      id="locations-section"
    >
      {plantLocations.map((plantLocation, index) => (
        <p
          key={index}
          onClick={() => setSelectedLocation(plantLocation)}
          className={selectedLocation === plantLocation ? "underline decoration-[#4F6F52]" : ""}
          id={`location-${index}`}
        >
          {plantLocation}
        </p>
      ))}
    </div>
  );
};

export default PlantLocations;
