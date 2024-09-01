import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { TreflePlantDetails } from "../../models/treflePlant/treflePlantDetails";
import { routerEnum } from "../../routes/routesEnum";

interface TopSectionMyPlantDetailsProps {
  treflePlant: TreflePlantDetails;
}

const TopSectionMyPlantDetails = ({ treflePlant }: TopSectionMyPlantDetailsProps) => {
  return (
    <div className="flex justify-between items-center w-full p-2 mt-2 mb-2" id="top-section-myPlant-details-page">
      <Link to={routerEnum.HOME} id="go-back-button-treflePlant-details-page">
        <div className="flex-shrink-0">
          <ChevronLeft size={35} />
        </div>
      </Link>
      <h1 id="treflePlant-details-plant-name" className="text-2xl">
        {treflePlant.data.common_name ? treflePlant.data.common_name : "Plant has no name"}
      </h1>
      <div className="flex-shrink-0" style={{ visibility: "hidden" }}>
        {/* This is a placeholder to ensure the plant name is centered */}
        <ChevronLeft />
      </div>
    </div>
  );
};

export default TopSectionMyPlantDetails;
