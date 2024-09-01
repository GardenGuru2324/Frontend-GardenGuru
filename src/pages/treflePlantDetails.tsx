import { useParams } from "react-router-dom";

import Loading from "../components/ui/loading";
import ErrorPage from "../components/errors/errorPage";

import { BottomDetailSection } from "../components/treflePlantDetails/bottomDetailSection";
import TopSectionMyPlantDetails from "../components/treflePlantDetails/topSectionMyPlantDetails";
import ImageMyPlantsDetails from "../components/treflePlantDetails/imageMyPlantDetails";
import OverviewMyPlantDetails from "../components/treflePlantDetails/overViewMyPlantDetails";
import useTreflePlantDetails from "../hooks/useTrelfePlantDetails";

export default function TreflePlantDetailPage() {
  const { treflePlantId } = useParams();
  const { treflePlantDetails, isError, isLoading, error } = useTreflePlantDetails(treflePlantId!);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-svh">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-svh">
        <ErrorPage error={error} />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between items-center min-h-svh h-full w-full max-w-[1400px]">
      <div className="w-full h-full">
        <TopSectionMyPlantDetails treflePlant={treflePlantDetails!} />

        <ImageMyPlantsDetails treflePlant={treflePlantDetails!} />

        <OverviewMyPlantDetails treflePlant={treflePlantDetails!} />
      </div>
      <BottomDetailSection />
    </div>
  );
}
