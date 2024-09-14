import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface TopSectionPlantDetailsProps {
  plantName: string;
}

const TopSectionMyPlantDetails = ({ plantName }: TopSectionPlantDetailsProps) => {
  return (
    <div className="flex justify-between items-center w-full p-2 mt-2 mb-2" id="top-section-myPlant-details-page">
      <Link to="/myPlants" id="go-back-button-myPlant-details-page">
        <div className="flex-shrink-0">
          <ChevronLeft size={35} />
        </div>
      </Link>
      <h1 id="myPlant-details-plant-name" className="text-2xl">
        {plantName ? plantName : "Plant has no name"}
      </h1>
      <div className="flex-shrink-0" style={{ visibility: "hidden" }}>
        {/* This is a placeholder to ensure the plant name is centered */}
        <ChevronLeft />
      </div>
    </div>
  );
};

export default TopSectionMyPlantDetails;
