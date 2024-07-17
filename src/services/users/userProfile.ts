import axios from "axios";

const baseUrl = process.env.BASE_URL;

export const getUserProfile = async (userId: string) => {
  const response = await axios.get(`${baseUrl}/user/${userId}`);

  return response.data;
};
