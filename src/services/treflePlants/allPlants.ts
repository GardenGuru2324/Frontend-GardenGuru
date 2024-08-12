import axios from "axios";

const baseUrl = process.env.BASE_URL;

export const getTreflePlants = async (page: number, search: string) => {
  const response = await axios.get(`${baseUrl}/treflePlants`, { params: { page: page, search: search } });

  return response.data;
};
