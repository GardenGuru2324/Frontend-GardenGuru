import { useQuery } from "react-query";
import { AxiosError } from "axios";

import { deleteMyPlant } from "../services/plants/deleteMyPlant";

const useDeleteMyPlant = (userId: string, plantId: string) => {
  const { data, isError, isLoading, error } = useQuery<string, AxiosError>(
    ["deleteMyPlant"],
    () => deleteMyPlant(userId, plantId)
  );

  return {
    message: data,
    isError,
    isLoading,
    error,
  };
};

export default useDeleteMyPlant;
