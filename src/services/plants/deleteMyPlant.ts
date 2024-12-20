import axios from "axios";

const baseUrl = process.env.BASE_URL;

export const deleteMyPlantByPlantId = async (userId: string, plantId: string) => {
  const response = await axios.delete(`${baseUrl}/user/${userId}/plants/${plantId}`);

  return response.data;
};
