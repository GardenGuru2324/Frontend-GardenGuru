import { useState } from "react";
import useTreflePlants from "../hooks/useTreflePlants";
import Loading from "../components/ui/loading";
import ErrorPage from "../components/errors/errorPage";

export default function TreflePlantsPage() {
  const [page, setPage] = useState<number>(1);
  const { treflePlants, isError, isLoading, error } = useTreflePlants(page);

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
    <div className="flex flex-col items-center w-full h-full">
      {treflePlants?.data.map((plant) => (
        <p key={plant.id}>{plant.common_name}</p>
      ))}
    </div>
  );
}
