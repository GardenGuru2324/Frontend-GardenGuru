import { Link, useParams } from "react-router-dom";
import useMyPlantsDetails from "../hooks/useMyPlantDetails";
import Loading from "../components/ui/loading";
import ErrorPage from "../components/errors/errorPage";
import { BottomDetailSection } from "../components/myPlantDetails/bottomDetailSection";
import { ChevronLeft } from "lucide-react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

export default function MyPlantsDetailPage() {
  const { plantId } = useParams();
  const { myPlant, isError, isLoading, error } = useMyPlantsDetails(plantId!);
  const plantFoto: string | undefined = myPlant?.plantImage;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-svh">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-svh">
        <ErrorPage error={error} />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between items-center min-h-svh h-full w-full">
      <div className="flex justify-between items-center w-full p-5 mt-2 relative max-w-[1400px]">
        <Link to="/myPlants">
          <div className="flex-shrink-0">
            <ChevronLeft size={35} />
          </div>
        </Link>
        <h1 className="text-2xl">{myPlant?.plantName}</h1>
        <div className="flex-shrink-0" style={{ visibility: "hidden" }}>
          {/* This is a placeholder to ensure the plant name is centered */}
          <ChevronLeft />
        </div>
      </div>

      <Card
        sx={{
          width: "100%",
          maxWidth: "1400px",
          maxHeight: "350px",
          boxShadow: 0,
          borderRadius: 0,
          position: "fixed",
          top: "100px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={myPlant!.plantImage}
            alt={myPlant!.plantName}
            sx={{
              height: "100%",
              width: "100%",
              maxHeight: "300px",
              objectFit: "cover",
            }}
          />
        </CardActionArea>
      </Card>

      <div>k</div>

      <BottomDetailSection />
    </div>
  );
}
