import axios from "axios";

const baseUrl = process.env.BASE_URL;

export const getMyPlants = async (userId: string) => {
  const response = await axios.get(`${baseUrl}/user/${userId}/plants`);

  return response.data;
};
