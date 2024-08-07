import axios from "axios";

const baseUrl = process.env.BASE_URL;

export const getMyPlantsDetails = async (plantId: string) => {
  const response = await axios.get(`${baseUrl}/plants/${plantId}`);

  return response.data;
};
