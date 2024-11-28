import { useParams } from "react-router-dom";
import useMyPlantsDetails from "../hooks/useMyPlantDetails";
import Loading from "../components/ui/loading";
import ErrorPage from "../components/errors/errorPage";
import { BottomDetailSection } from "../components/myPlantDetails/bottomDetailSection";

import TopSectionMyPlantDetails from "../components/myPlantDetails/topSectionMyPlantDetails";
import ImageMyPlantsDetails from "../components/myPlantDetails/imageMyPlantDetails";
import OverviewMyPlantDetails from "../components/myPlantDetails/overViewMyPlantDetails";
import { routerEnum } from "../routes/routesEnum";
import { useState } from "react";
import { Alert } from "@mui/material";
import { Sprout } from "lucide-react";

export default function MyPlantsDetailPage() {
  const { plantId } = useParams();
  const [modal, setModel] = useState<boolean>(false);
  const { myPlant, isError, isLoading, error } = useMyPlantsDetails(plantId!);

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
        <TopSectionMyPlantDetails plantName={myPlant!.plantName} link={routerEnum.MY_PLANTS} />

        <ImageMyPlantsDetails plantImage={myPlant!.plantImage} />

        <div className="flex justify-center items-center h-full w-full">
          {modal && (
            <Alert className="w-[100%] max-w-[1400px] rounded mt-4 ml-4 mr-4 flex items-center" icon={<Sprout color="white" />} sx={{ color: "white" }} variant="filled" severity="error">
              Plant successfully deleted of your profile!
            </Alert>
          )}
        </div>

        <OverviewMyPlantDetails myPlant={myPlant!} />
      </div>
      <BottomDetailSection plantId={myPlant!.plantId} setModal={setModel} />
    </div>
  );
}
