import axios from 'axios';

const API_URL = 'http://localhost:5000/api/cart';

export const getCart = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addToCart = async (productId: string, quantity: number) => {
  const response = await axios.post(API_URL + '/add', { productId, quantity });
  return response.data;
};
