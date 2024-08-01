import { useParams } from "react-router-dom";

export default function MyPlantsDetailPage() {
  const { plantId } = useParams();
  return (
    <div className="m-auto">
      <p>MyPlantsDetailPage : {plantId}</p>
    </div>
  );
}
