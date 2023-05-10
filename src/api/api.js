import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const buscar = async (url, setData) => {
  const response = await api.get(url);
  setData(response.data);
};
