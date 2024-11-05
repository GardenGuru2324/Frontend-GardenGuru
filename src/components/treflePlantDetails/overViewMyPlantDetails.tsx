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
import Detailsquare from "../myPlantDetails/detailSquare";
import { TreflePlantDetails } from "../../models/treflePlant/treflePlantDetails";

interface OverviewMyPlantDetailsProps {
  treflePlant: TreflePlantDetails;
}

const OverviewMyPlantDetails = ({ treflePlant }: OverviewMyPlantDetailsProps) => {
  const createCelsiusFormat = (maxTemp: number | null, minTemp: number | null): string => {
    return `${minTemp} °C - ${maxTemp}`;
  };

  return (
    <div className="w-full">
      <div className="text-white bg-[#1A4D2E] ml-4 mt-4 rounded-md w-[100px] h-[30px] flex items-center justify-center font-semibold">
        Overview
      </div>
      <div className="flex flex-wrap gap-4 m-4" id="treflePlant-details-section">
        {treflePlant.data.main_species.specifications.average_height.cm && (
          <Detailsquare
            data={treflePlant.data.main_species.specifications.average_height.cm}
            icon={ArrowUpFromLine}
            text="cm"
          />
        )}

        {treflePlant.data.main_species.specifications.maximum_height.cm && (
          <Detailsquare
            data={treflePlant.data.main_species.specifications.maximum_height.cm}
            icon={ArrowUpToLine}
            text="cm"
          />
        )}

        {treflePlant.data.main_species.specifications.growth_habit && (
          <Detailsquare data={treflePlant.data.main_species.specifications.growth_habit} icon={TreeDeciduous} text="" />
        )}

        {treflePlant.data.vegetable ? (
          <Detailsquare data={null} icon={Utensils} text="Edible" />
        ) : (
          <Detailsquare data={null} icon={UtensilsCrossed} text="Not edible" />
        )}

        {treflePlant.data.main_species.specifications.growth_rate && (
          <Detailsquare data={treflePlant.data.main_species.specifications.growth_rate} icon={BarChart4} text="" />
        )}

        {treflePlant.data.main_species.growth.row_spacing.cm && (
          <Detailsquare
            data={treflePlant.data.main_species.growth.row_spacing.cm}
            icon={BetweenVerticalEnd}
            text="cm"
          />
        )}

        {treflePlant.data.main_species.growth.days_to_harvest && (
          <Detailsquare data={treflePlant.data.main_species.growth.days_to_harvest} icon={Tractor} text="Days" />
        )}

        {treflePlant.data.main_species.growth.maximum_temperature.deg_c &&
          treflePlant.data.main_species.growth.minimum_temperature.deg_c && (
            <Detailsquare
              data={createCelsiusFormat(
                treflePlant.data.main_species.growth.maximum_temperature.deg_c,
                treflePlant.data.main_species.growth.maximum_temperature.deg_c
              )}
              icon={Thermometer}
              text="&deg;C"
            />
          )}
      </div>
    </div>
  );
};
export default OverviewMyPlantDetails;
