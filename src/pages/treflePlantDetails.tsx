import { useParams } from "react-router-dom";

import Loading from "../components/ui/loading";
import ErrorPage from "../components/errors/errorPage";

import { BottomDetailSection } from "../components/treflePlantDetails/bottomDetailSection";
import TopSectionMyPlantDetails from "../components/myPlantDetails/topSectionMyPlantDetails";
import ImageMyPlantsDetails from "../components/myPlantDetails/imageMyPlantDetails";
import OverviewMyPlantDetails from "../components/treflePlantDetails/overViewMyPlantDetails";
import useTreflePlantDetails from "../hooks/useTrelfePlantDetails";
import { routerEnum } from "../routes/routesEnum";

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
        <TopSectionMyPlantDetails plantName={treflePlantDetails!.data.common_name} link={routerEnum.HOME} />

        <ImageMyPlantsDetails plantImage={treflePlantDetails!.data.image_url} />

        <OverviewMyPlantDetails treflePlant={treflePlantDetails!} />
      </div>
      <BottomDetailSection />
    </div>
  );
}
