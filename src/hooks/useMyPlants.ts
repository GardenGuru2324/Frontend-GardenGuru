import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { Plant } from "../models/plant/plant";
import { getMyPlants } from "../services/plants/myPlants";

const useMyPlants = (userId: string) => {
  const { data, isError, isLoading, error } = useQuery<Plant[], AxiosError>(["myPlants"], () => getMyPlants(userId));

  return {
    plants: data,
    isError,
    isLoading,
    error,
  };
};

export default useMyPlants;
