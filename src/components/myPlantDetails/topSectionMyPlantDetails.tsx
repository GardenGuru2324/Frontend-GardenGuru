import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Plant } from "../../models/plant/plant";

interface TopSectionMyPlantDetailsProps {
  myPlant: Plant;
}

const TopSectionMyPlantDetails = ({ myPlant }: TopSectionMyPlantDetailsProps) => {
  return (
    <div className="flex justify-between items-center w-full p-2 mt-2 mb-2">
      <Link to="/myPlants">
        <div className="flex-shrink-0">
          <ChevronLeft size={35} />
        </div>
      </Link>
      <h1 className="text-2xl">{myPlant?.plantName}</h1>
      <div className="flex-shrink-0" style={{ visibility: "hidden" }}>
        {/* This is a placeholder to ensure the plant name is centered */}
        <ChevronLeft />
      </div>
    </div>
  );
};

export default TopSectionMyPlantDetails;
