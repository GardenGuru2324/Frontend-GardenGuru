import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Loading from "../ui/loading";
import useMyPlants from "../../hooks/useMyPlants";
import ErrorPage from "../errors/errorPage";
import PlantCard from "./plantCard";
import { FilterContext } from "../../contexts/SearchContext";

export default function MyPlantsPageWrapper() {
  const minAmoutOfChar: number = 3;
  const { search } = useContext(FilterContext);
  const { userId } = useContext(AuthContext);
  const { plants, isError, isLoading, error } = useMyPlants(userId, search.length > minAmoutOfChar ? search : "");

  if (isLoading) {
    // need to fix hight problem!!
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return <ErrorPage error={error} />;
  }

  return (
    <div className="flex justify-center items-center flex-wrap">
      {plants!.map((plant, index) => (
        <PlantCard plant={plant} key={plant.plantId} index={index} />
      ))}
    </div>
  );
}
