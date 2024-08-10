import axios from "axios";

const baseUrl = process.env.BASE_URL;

export const getTreflePlants = async (page: number) => {
  const response = await axios.get(`http://localhost:5000/api/v1/treflePlants`, { params: { page: page } }); // change to base url!!

  return response.data;
};
