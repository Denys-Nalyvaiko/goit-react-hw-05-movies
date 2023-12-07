import axios from 'axios';
import API from './constants';

const instance = axios.create({ baseURL: API.BASE_URL });

instance.defaults.headers.common = {
  Authorization: `Bearer ${API.AUTH_TOKEN}`,
};

export default instance;
