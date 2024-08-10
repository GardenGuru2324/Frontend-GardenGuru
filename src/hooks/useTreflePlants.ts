import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { getTreflePlants } from "../services/treflePlants/allPlants";
import { TreflePlant } from "../models/treflePlant/treflePlant";

const useTreflePlants = (page: number) => {
  const { data, isError, isLoading, error } = useQuery<TreflePlant, AxiosError>(["treflePlants"], () =>
    getTreflePlants(page)
  );

  return {
    treflePlants: data,
    isError,
    isLoading,
    error,
  };
};

export default useTreflePlants;
