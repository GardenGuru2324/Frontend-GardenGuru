import { useQuery } from "react-query";
import { AxiosError } from "axios";

import { getTreflePlantDetails } from "../services/treflePlants/plantDetailst";
import { TreflePlantDetails } from "../models/treflePlant/treflePlantDetails";

const useTreflePlantDetails = (treflePlantId: string) => {
  0;
  const { data, isError, isLoading, error } = useQuery<TreflePlantDetails, AxiosError>(["treflePlantDetails"], () =>
    getTreflePlantDetails(treflePlantId)
  );

  return {
    treflePlantDetails: data,
    isError,
    isLoading,
    error,
  };
};

export default useTreflePlantDetails;
