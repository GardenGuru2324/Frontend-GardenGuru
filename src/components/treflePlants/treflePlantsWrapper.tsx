import { useContext, useState } from "react";
import useTreflePlants from "../../hooks/useTreflePlants";
import Loading from "../ui/loading";
import ErrorPage from "../errors/errorPage";
import TreflePlantCard from "./treflePlantCard";
import { TrefleFilterContext } from "../../contexts/TrefleFilterContext";
import TreflePagination from "./treflePagination";

export default function TreflePlantsWrapper() {
  const minAmoutOfChar: number = 3;
  const { search } = useContext(TrefleFilterContext);
  const [page, setPage] = useState<number>(1);
  const { treflePlants, isError, isLoading, error } = useTreflePlants(
    page,
    search.length > minAmoutOfChar ? search : ""
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100svh]">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return <ErrorPage error={error} />;
  }

  return (
    <div>
      <div className="flex justify-center items-center flex-wrap max-w-[1400px] w-full h-full">
        {treflePlants!.map(
          (treflePlant, index) => treflePlant.common_name && <TreflePlantCard treflePlant={treflePlant} index={index} />
        )}
      </div>
      <TreflePagination page={page} setPage={setPage} />
    </div>
  );
}
