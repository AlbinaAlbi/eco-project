import api from "./api";

export const sendContact = async (data: {name: string, email: string, message: string}) => {
  const response = await api.post('/contacts', data);
  console.log(response.data);
};
