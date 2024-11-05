import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { Plant } from "../models/plant/plant";
import { getMyPlantsDetails } from "../services/plants/myPlantsDetails";

const useMyPlantsDetails = (plantId: string) => {
  const { data, isError, isLoading, error } = useQuery<Plant, AxiosError>(["myPlantDetails"], () =>
    getMyPlantsDetails(plantId)
  );

  return {
    myPlant: data,
    isError,
    isLoading,
    error,
  };
};

export default useMyPlantsDetails;
