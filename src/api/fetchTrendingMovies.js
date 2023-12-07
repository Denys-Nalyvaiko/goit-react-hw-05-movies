import instance from './axiosDefaults';
import API from './constants';

const fetchTrendingMovies = async () => {
  const responce = await instance.get(
    `${API.ENDPOINT.TRENDING}?language=en-US`
  );

  return responce.data;
};

export default fetchTrendingMovies;
