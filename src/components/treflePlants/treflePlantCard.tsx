import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { TreflePlant } from "../../models/treflePlant/treflePlant";
import { Link } from "react-router-dom";

interface PlantCardPorps {
  treflePlant: TreflePlant;
  index: number;
}

export default function TreflePlantCard({ treflePlant, index }: PlantCardPorps) {
  return (
    <Link to={`treflePlant/${treflePlant.id}`}>
      <div id={`plant-card-${index}`}>
        <Card sx={{ maxWidth: 300 }} className="m-4">
          <CardActionArea>
            <CardMedia
              component="img"
              image={treflePlant.image_url}
              alt={treflePlant.common_name}
              sx={{
                height: 200,
                width: 300,
                objectFit: "cover",
              }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="truncate"
                title={treflePlant.common_name}
              >
                {treflePlant.common_name ? treflePlant.common_name : "Plant has no name"}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </Link>
  );
}
