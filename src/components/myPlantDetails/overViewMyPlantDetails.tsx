import { Plant } from "../../models/plant/plant";

interface OverviewMyPlantDetailsProps {
  myPlant: Plant;
}

const OverviewMyPlantDetails = ({ myPlant }: OverviewMyPlantDetailsProps) => {
  return (
    <div className="w-full">
      <div className="text-white bg-[#1A4D2E] p-2 ml-4 mt-4 rounded-md w-[100px] h-[30px] flex items-center justify-center font-semibold">
        Overview
      </div>
      <div className="m-4 flex flex-col gap-2">
        <div className="flex justify-between w-full">
          <p>Average height</p>
          <p>{myPlant?.plantAvgHeight} cm</p>
        </div>
        <div className="flex justify-between w-full">
          <p>Maximum height</p>
          <p>{myPlant?.plantAvgHeight} cm</p>
        </div>
        <div className="flex justify-between w-full">
          <p>Minimum temperature</p>
          <p>{myPlant?.plantMinTemp} &#8451;</p>
        </div>
        <div className="flex justify-between w-full">
          <p>Maximum temperature</p>
          <p>{myPlant?.plantMaxTemp} &#8451;</p>
        </div>
        {myPlant?.isVegetable ? (
          <div className="flex justify-between w-full">
            <p>Edible</p>
            <p>Yes</p>
          </div>
        ) : (
          <div className="flex justify-between w-full">
            <p>Edible</p>
            <p>No</p>
          </div>
        )}
        <div className="flex justify-between w-full">
          <p>Growt habit</p>
          <p>{myPlant?.plantGrowthHabit}</p>
        </div>
        <div className="flex justify-between w-full">
          <p>Growt rate</p>
          <p>{myPlant?.plantGrowthRate}</p>
        </div>
        <div className="flex justify-between w-full">
          <p>Days to harvest</p>
          <p>{myPlant?.plantDaysToHarvest} days</p>
        </div>
        <div className="flex justify-between w-full">
          <p>Plant row spacing</p>
          <p>{myPlant?.plantRowSpacing} cm</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewMyPlantDetails;
