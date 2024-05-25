import axios from 'axios';

export const getPlants = async () => {
	const response = await axios.get(`https://backend-api-garden-guru.vercel.app/api/v1/plants`);

	return response.data;
};
