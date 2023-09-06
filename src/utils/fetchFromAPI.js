import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
  params: {
    maxResults: 50,
  },
});

export const fetchFromAPI = async (url) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    // Handle error or throw it for higher-level handling
    throw error;
  }
};
