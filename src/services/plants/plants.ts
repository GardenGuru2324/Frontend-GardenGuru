import axios from 'axios';

const baseUrl = process.env.BASE_URL;

export const getPlants = async () => {
	const response = await axios.get(`${baseUrl}/plants`);

	return response.data;
};
