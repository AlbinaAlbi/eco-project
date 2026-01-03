import { Initiative } from "../types/Initiative";
import { api } from "./api";

export const fetchInitiatives = async (): Promise<Initiative[]> => {
  const response = await api.get<Initiative[]>("/initiatives");

  return response.data;
};

export const createInitiative = async (
  initiative: Initiative
): Promise<Initiative> => {
  const response = await api.post<Initiative>("/initiatives", initiative);
  
  return response.data;
};
