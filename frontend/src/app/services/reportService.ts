import axios from 'axios';

const API_URL = 'http://localhost:5000/api/reports';

export const getReports = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getReportById = async (reportId: string) => {
    const response = await axios.get(`http://localhost:5000/api/reports/${reportId}`);
    return response.data;
  };
  