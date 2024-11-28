import { useParams } from "react-router-dom";

import Loading from "../components/ui/loading";
import ErrorPage from "../components/errors/errorPage";

import { BottomDetailSection } from "../components/treflePlantDetails/bottomDetailSection";
import TopSectionMyPlantDetails from "../components/myPlantDetails/topSectionMyPlantDetails";
import ImageMyPlantsDetails from "../components/myPlantDetails/imageMyPlantDetails";
import OverviewMyPlantDetails from "../components/treflePlantDetails/overViewMyPlantDetails";
import useTreflePlantDetails from "../hooks/useTrelfePlantDetails";
import { routerEnum } from "../routes/routesEnum";
import { useState } from "react";
import { Alert } from "@mui/material";
import { Sprout } from "lucide-react";

export default function TreflePlantDetailPage() {
  const { treflePlantId } = useParams();
  const [modal, setModel] = useState<boolean>(false);
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
        <div className="flex justify-center items-center h-full w-full">
          {modal && (
            <Alert className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-4 rounded shadow-lg w-[90%] max-w-[1200px]" icon={<Sprout />} severity="success">
              Plant successfully added to your profile!
            </Alert>
          )}
        </div>
        <TopSectionMyPlantDetails plantName={treflePlantDetails!.data.common_name} link={routerEnum.HOME} />

        <ImageMyPlantsDetails plantImage={treflePlantDetails!.data.image_url} />

        <OverviewMyPlantDetails treflePlant={treflePlantDetails!} />
      </div>
      <BottomDetailSection treflePlant={treflePlantDetails!} setModal={setModel} />
    </div>
  );
}
