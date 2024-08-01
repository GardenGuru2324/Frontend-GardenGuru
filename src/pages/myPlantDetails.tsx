import { Link, useParams } from "react-router-dom";
import useMyPlantsDetails from "../hooks/useMyPlantDetails";
import Loading from "../components/ui/loading";
import ErrorPage from "../components/errors/errorPage";
import { BottomDetailSection } from "../components/myPlantDetails/bottomDetailSection";
import { ChevronLeft } from "lucide-react";

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
      <div className="flex justify-between items-center w-full p-5 mt-2">
        <Link to="/myPlants">
          <div className="flex-shrink-0">
            <ChevronLeft size={35} />
          </div>
        </Link>
        <div className="flex-grow text-center">
          <h1 className="text-xl">{myPlant?.plantName}</h1>
        </div>
      </div>
      <BottomDetailSection />
    </div>
  );
}
