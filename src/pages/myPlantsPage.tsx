import SearchField from "../components/plants/searchField";
import PlantLocations from "../components/plants/plantLocations";
import MyPlantsPageWrapper from "../components/plants/myPlantsWrapper";
import { FilterProvider } from "../contexts/SearchContext";

export default function MyPlantsPage() {
  return (
    <div className="flex flex-col items-center w-full">
      <FilterProvider>
        <SearchField />

        <PlantLocations />

        <MyPlantsPageWrapper />
      </FilterProvider>
    </div>
  );
}
