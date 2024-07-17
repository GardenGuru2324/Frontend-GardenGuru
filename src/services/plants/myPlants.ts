import axios from "axios";

const baseUrl = process.env.BASE_URL;

export const getMyPlants = async (userId: string, search: string) => {
  const response = await axios.get(`${baseUrl}/user/${userId}/plants`, { params: { search: search } });

  return response.data;
};
