import axios from "axios";

const baseUrl = process.env.BASE_URL;

export const getTreflePlantDetails = async (treflePlantId: string) => {
  const response = await axios.get(`${baseUrl}/treflePlants/${treflePlantId}`);

  return response.data;
};
