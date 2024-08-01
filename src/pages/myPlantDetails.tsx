import { useParams } from "react-router-dom";
import useMyPlantsDetails from "../hooks/useMyPlantDetails";
import Loading from "../components/ui/loading";
import ErrorPage from "../components/errors/errorPage";
import { BottomDetailSection } from "../components/myPlantDetails/bottomDetailSection";

export default function MyPlantsDetailPage() {
  const { plantId } = useParams();
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
    <div className="flex flex-col justify-between items-center min-h-svh h-full w-full">
      <p>MyPlantsDetailPage : {myPlant?.plantName}</p>
      <BottomDetailSection />
    </div>
  );
}
