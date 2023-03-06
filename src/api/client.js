import axios from "axios";
import { BASE_URL, ENDPOINTS } from "./endPoints";

export const apiClient = axios.create({
  baseURL: BASE_URL,
});

export const fetchLaunchesAPI = async (body) => {
  const data = await apiClient.post(ENDPOINTS.LAUNCHES, body);
  return data;
};
