import PlantCard from '../components/plant/plantCard';
import Loading from '../components/ui/loading';
import usePlants from '../hooks/usePlants';

export default function HomePage() {
	const { plants, isError, isLoading } = usePlants();

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen w-full">
				<Loading />
			</div>
		);
	}

	if (isError) {
		return (
			<div className="flex justify-center items-center h-screen w-full">
				<p>Error!</p>
			</div>
		);
	}

	return (
		<div className="flex justify-center items-center flex-wrap">
			{plants!.map((plant) => (
				<PlantCard plant={plant} key={plant.plantId} />
			))}
		</div>
	);
}
