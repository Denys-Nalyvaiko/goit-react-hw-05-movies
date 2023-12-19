import instance from './axiosDefaults';
import API from './constants';

const fetchMovieCast = async id => {
  const responce = await instance.get(
    `${API.ENDPOINT.MOVIE_DETAILS}/${id}${API.ENDPOINT.CREDITS}?${API.QUERY.LANGUAGE}&page=1`
  );

  return await responce.data;
};

export default fetchMovieCast;
