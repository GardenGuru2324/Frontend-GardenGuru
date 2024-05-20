import { useEffect, useState } from 'react';
import { Plant } from '../models/plant';
import PlantCard from '../components/plant/plantCard';

export default function HomePage() {
	const [plants, setPlants] = useState<Plant[]>([]);

	useEffect(() => {
		const fetchPlants = async () => {
			const data = await fetch('https://backend-api-garden-guru.vercel.app/api/v1/plants'); // change to service
			const plants = await data.json();
			setPlants(plants);
		};
		fetchPlants();
	}, []);

	return (
		<div className="flex justify-center items-center flex-wrap">
			{plants.map((plant) => (
				<PlantCard plant={plant} />
			))}
		</div>
	);
}
