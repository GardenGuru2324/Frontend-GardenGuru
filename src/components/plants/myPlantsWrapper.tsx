import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Loading from "../ui/loading";
import useMyPlants from "../../hooks/useMyPlants";
import ErrorPage from "../errors/errorPage";
import PlantCard from "./plantCard";
import { FilterContext } from "../../contexts/FilterContext";

export default function MyPlantsPageWrapper() {
  const minAmoutOfChar: number = 3;
  const { search } = useContext(FilterContext);
  const { userId } = useContext(AuthContext);
  const { plants, isError, isLoading, error } = useMyPlants(userId, search.length > minAmoutOfChar ? search : "");

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[75vh]">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return <ErrorPage error={error} />;
  }

  return (
    <div className="flex justify-center items-center flex-wrap max-w-[1400px] w-full h-full">
      {plants!.map((plant, index) => (
        <PlantCard plant={plant} key={plant.plantId} index={index} />
      ))}
    </div>
  );
}
