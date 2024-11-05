import { Plant } from "../../models/plant/plant";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

interface PlantCardPorps {
  plant: Plant;
  index: number;
}

export default function PlantCard({ plant, index }: PlantCardPorps) {
  const [imageSrc, setImageSrc] = useState(plant.plantImage);
  const [error, setError] = useState<boolean>(false);

  const handleImageError = () => {
    setImageSrc("./sad-plant.gif");
    setError(true);
  };

  return (
    <Link to={`/myPlants/${plant.plantId}`}>
      <div id={`plant-card-${index}`}>
        <Card sx={{ maxWidth: 300 }} className="m-4">
          <CardActionArea>
            <CardMedia
              component="img"
              image={imageSrc}
              alt={plant.plantName}
              sx={{
                height: 200,
                width: 300,
                objectFit: error ? "contain" : "cover",
              }}
              onError={handleImageError}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="truncate">
                {plant.plantName ? plant.plantName : "Plant has no name"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {new Date(plant.plantedDate).toLocaleString("nl-BE", {
                  timeZone: "Europe/Brussels",
                })}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </Link>
  );
}
