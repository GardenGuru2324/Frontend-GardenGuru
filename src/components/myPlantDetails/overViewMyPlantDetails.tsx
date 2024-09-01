import {
  ArrowUpFromLine,
  ArrowUpToLine,
  BetweenVerticalEnd,
  Thermometer,
  Tractor,
  TreeDeciduous,
  Utensils,
  UtensilsCrossed,
  BarChart4,
} from "lucide-react";
import { Plant } from "../../models/plant/plant";
import Detailsquare from "./detailSquare";

interface OverviewMyPlantDetailsProps {
  myPlant: Plant;
}

const OverviewMyPlantDetails = ({ myPlant }: OverviewMyPlantDetailsProps) => {
  const createCelsiusFormat = (maxTemp: number, minTemp: number): string => {
    return `${minTemp} - ${maxTemp}`;
  };

  return (
    <div className="w-full">
      <div className="text-white bg-[#1A4D2E] ml-4 mt-4 rounded-md w-[100px] h-[30px] flex items-center justify-center font-semibold">
        Overview
      </div>
      <div className="flex flex-wrap gap-4 m-4" id="myPlant-details-section">
        {myPlant.plantAvgHeight && <Detailsquare data={myPlant.plantAvgHeight} icon={ArrowUpFromLine} text="cm" />}

        {myPlant.plantMaxHeight && <Detailsquare data={myPlant.plantMaxHeight} icon={ArrowUpToLine} text="cm" />}

        {myPlant.plantGrowthHabit && <Detailsquare data={myPlant.plantGrowthHabit} icon={TreeDeciduous} text="" />}

        {myPlant.isVegetable ? (
          <Detailsquare data={null} icon={Utensils} text="Edible" />
        ) : (
          <Detailsquare data={null} icon={UtensilsCrossed} text="Not edible" />
        )}

        {myPlant.plantGrowthRate && <Detailsquare data={myPlant.plantGrowthRate} icon={BarChart4} text="" />}

        {myPlant.plantRowSpacing && <Detailsquare data={myPlant.plantRowSpacing} icon={BetweenVerticalEnd} text="cm" />}

        {myPlant.plantDaysToHarvest && <Detailsquare data={myPlant.plantDaysToHarvest} icon={Tractor} text="Days" />}

        {myPlant.plantMaxTemp && myPlant.plantMinTemp && (
          <Detailsquare
            data={createCelsiusFormat(myPlant.plantMaxTemp, myPlant.plantMinTemp)}
            icon={Thermometer}
            text="&deg;C"
          />
        )}
      </div>
    </div>
  );
};
export default OverviewMyPlantDetails;
