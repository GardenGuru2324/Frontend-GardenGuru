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
        <TopSectionMyPlantDetails plantName={treflePlantDetails!.data.common_name} link={routerEnum.HOME} />

        <ImageMyPlantsDetails plantImage={treflePlantDetails!.data.image_url} />
        <div className="flex justify-center items-center h-full w-full">
          {modal && (
            <Alert className="w-[100%] max-w-[1400px] rounded mt-4 ml-4 mr-4" icon={<Sprout color="white" />} sx={{ backgroundColor: "#1A4D2E", color: "white" }}>
              Plant successfully added to your profile!
            </Alert>
          )}
        </div>

        <OverviewMyPlantDetails treflePlant={treflePlantDetails!} />
      </div>
      <BottomDetailSection treflePlant={treflePlantDetails!} setModal={setModel} />
    </div>
  );
}
