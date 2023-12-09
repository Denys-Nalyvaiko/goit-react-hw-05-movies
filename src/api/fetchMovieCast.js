import instance from './axiosDefaults';
import API from './constants';

const fetchMovieCast = async id => {
  const responce = await instance.get(
    `${API.BASE_URL}${API.ENDPOINT.MOVIE_DETAILS}/${id}${API.ENDPOINT.CREDITS}`
  );

  return await responce.data;
};

export default fetchMovieCast;
