import api from "./api";

export const donate = async (projectId: string, amount: number) => {
  const response = await api.post('/donations', {
    projectId,
    amount
  });
  console.log(response.data);
};
