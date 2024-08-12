import { useParams } from "react-router-dom";
import { useContext } from "react";
import useMyPlantsDetails from "../hooks/useMyPlantDetails";
import Loading from "../components/ui/loading";
import ErrorPage from "../components/errors/errorPage";
import { BottomDetailSection } from "../components/myPlantDetails/bottomDetailSection";

import TopSectionMyPlantDetails from "../components/myPlantDetails/topSectionMyPlantDetails";
import ImageMyPlantsDetails from "../components/myPlantDetails/imageMyPlantDetails";
import OverviewMyPlantDetails from "../components/myPlantDetails/overViewMyPlantDetails";
import { MyPlantDetailsContext } from "../contexts/MyPlantDetailsContext";
import SuccesMessage from "../components/successes/succesMessage";

export default function MyPlantsDetailPage() {
  const {
    plantId,
    setPlantId,
    myPlant,
    setMyPlant,
    isError,
    setIsError,
    isLoading,
    setIsLoading,
    error,
    setError,
    message,
  } = useContext(MyPlantDetailsContext);
  const { plantId: paramPlantId } = useParams();
  paramPlantId && setPlantId(paramPlantId);
  const { myPlant: paramMyPlant, isError: paramIsError, isLoading: paramIsLoading, error: paramError } = useMyPlantsDetails(plantId!);
  paramMyPlant && setMyPlant(paramMyPlant);
  setIsError(paramIsError);
  setIsLoading(paramIsLoading);
  paramError && setError(paramError);

  if (message != "") {
    return (
      <div className="flex justify-center items-center h-svh">
        <SuccesMessage succesMessage={message} />
      </div>
    );
  }

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
        <TopSectionMyPlantDetails myPlant={myPlant!} />

        <ImageMyPlantsDetails myPlant={myPlant!} />

        <OverviewMyPlantDetails myPlant={myPlant!} />
      </div>
      <BottomDetailSection />
    </div>
  );
}
