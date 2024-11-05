import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { getMyPlants } from "../services/plants/myPlants";
import { UserPlant } from "../models/plant/userPlants";

const useMyPlants = (userId: string, search: string, page: number) => {
  const { data, isError, isLoading, error } = useQuery<UserPlant, AxiosError>(["myPlants", search, page], () => getMyPlants(userId, search, page));

  return {
    plants: data,
    isError,
    isLoading,
    error,
  };
};

export default useMyPlants;
