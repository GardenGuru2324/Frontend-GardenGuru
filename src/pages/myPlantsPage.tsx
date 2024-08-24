//import PlantLocations from "../components/plants/plantLocations";
import MyPlantsPageWrapper from "../components/plants/myPlantsWrapper";
import { FilterProvider } from "../contexts/FilterContext";
import SearchSection from "../components/plants/searchSection";

export default function MyPlantsPage() {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <FilterProvider>
        <SearchSection />

        {/* <PlantLocations /> */}

        <MyPlantsPageWrapper />
      </FilterProvider>
    </div>
  );
}
