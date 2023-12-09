import instance from './axiosDefaults';
import API from './constants';

const fetchTrendingMovies = async () => {
  const responce = await instance.get(
    `${API.ENDPOINT.TRENDING}?${API.QUERY.LANGUAGE}`
  );

  return responce.data;
};

export default fetchTrendingMovies;
