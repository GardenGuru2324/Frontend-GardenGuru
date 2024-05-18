import { Plant } from '../../models/plant';
import Card from '@mui/material/Card';

interface PlantCardPorps {
	plant: Plant;
}

export default function PlantCard({ plant }: PlantCardPorps) {
	return (
		<div>
			<Card variant="outlined">{plant.plantName}</Card>
		</div>
	);
}
