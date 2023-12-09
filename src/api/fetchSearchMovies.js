import instance from './axiosDefaults';
import API from './constants';

const fetchSearchMovies = async (query = 'batman', page = 1) => {
  const responce = await instance.get(
    `${API.ENDPOINT.SEARCH_MOVIE}?${API.QUERY.LANGUAGE}&query=${query}&page=${page}`
  );

  return responce.data;
};

export default fetchSearchMovies;
