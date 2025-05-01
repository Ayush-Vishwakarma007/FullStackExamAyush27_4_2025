import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

export const getProductById = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const getProducts = async (page: number) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/products?page=${page}&limit=5`);
      return res.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  };