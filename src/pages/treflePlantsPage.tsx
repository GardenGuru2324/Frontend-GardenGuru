import TreflePlantsWrapper from "../components/treflePlants/treflePlantsWrapper";
//import TrefleSearchSection from "../components/treflePlants/trefleSearchSection";
import { TrefleFilterProvider } from "../contexts/TrefleFilterContext";

export default function TreflePlantsPage() {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <TrefleFilterProvider>
        {/* <TrefleSearchSection /> */}
        <TreflePlantsWrapper />
      </TrefleFilterProvider>
    </div>
  );
}
