import axios from 'axios';
import Config from 'react-native-config';

const {MOVIE_API_ROOT} = Config;

export const axiosClient = axios.create({
  baseURL: MOVIE_API_ROOT,
});
