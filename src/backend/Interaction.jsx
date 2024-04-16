import axios from "axios";

const API_URL = "ya allah";

export const fetchItems = () => axios.get(`${API_URL}/items`);
export const createItem = (item) => axios.post(`${API_URL}/items`, item);
export const deleteItem = (id) => axios.delete(`${API_URL}/items/${id}`);
export const updateItem = (id, item) =>
  axios.put(`${API_URL}/items/${id}`, item);
