import { Plant } from '../../models/plant/plant';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface PlantCardPorps {
	plant: Plant;
}

export default function PlantCard({ plant }: PlantCardPorps) {
	return (
		<Card sx={{ maxWidth: 300 }} className="m-4">
			<CardActionArea>
				<CardMedia
					component="img"
					image={plant.plantImage}
					alt={plant.plantName}
					sx={{
						height: 200,
						width: 300,
						objectFit: 'cover'
					}}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{plant.plantName}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{new Date(plant.plantedDate).toLocaleString('nl-BE', {
							timeZone: 'Europe/Brussels'
						})}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
