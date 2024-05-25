import { useEffect, useState } from 'react';
import { Plant } from '../models/plant';
import PlantCard from '../components/plant/plantCard';
import Loading from '../components/ui/loading';

export default function HomePage() {
	const [plants, setPlants] = useState<Plant[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchPlants = async () => {
			setIsLoading(true);
			const data = await fetch('https://backend-api-garden-guru.vercel.app/api/v1/plants'); // change to service
			const plants = await data.json();
			setPlants(plants);
			setIsLoading(false);
		};
		fetchPlants();
	}, []);

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen w-full">
				<Loading />
			</div>
		);
	}

	return (
		<div className="flex justify-center items-center flex-wrap">
			{plants.map((plant) => (
				<PlantCard plant={plant} />
			))}
			<p>test</p>
		</div>
	);
}
