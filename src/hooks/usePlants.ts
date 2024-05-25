import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { getPlants } from '../services/plants/plants';
import { Plant } from '../models/plant/plant';

const usePlants = () => {
	const { data, isError, isLoading, error } = useQuery<Plant[], AxiosError>(['plants'], () =>
		getPlants()
	);

	return {
		plants: data,
		isError,
		isLoading,
		error
	};
};

export default usePlants;
