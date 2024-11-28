import axios from "axios";
import { NewPlant } from "../../models/plant/newPlant";

const baseUrl = process.env.BASE_URL;

export const addPlantToMyPlants = async (newPant: NewPlant) => {
  const response = await axios.post(`${baseUrl}/plant`, newPant);

  return response.data;
};
