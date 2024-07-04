import { useContext } from 'react';

import ErrorPage from '../components/errors/errorPage';
import PlantCard from '../components/plants/plantCard';
import PlantLocations from '../components/plants/plantLocations';
import SearchField from '../components/plants/searchField';
import Loading from '../components/ui/loading';
import { AuthContext } from '../contexts/AuthContext';
import useMyPlants from '../hooks/useMyPlants';

export default function MyPlantsPage() {
	const { userId } = useContext(AuthContext);
	const { plants, isError, isLoading, error } = useMyPlants(userId);

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen w-full">
				<Loading />
			</div>
		);
	}

	if (isError) {
		return <ErrorPage error={error} />;
	}

	return (
		<div className="flex flex-col items-center w-full">
			<SearchField />

			<PlantLocations />

			<div className="flex justify-center items-center flex-wrap">
				{plants!.map((plant, index) => (
					<PlantCard
						plant={plant}
						key={plant.plantId}
						index={index}
					/>
				))}
			</div>
		</div>
	);
}
