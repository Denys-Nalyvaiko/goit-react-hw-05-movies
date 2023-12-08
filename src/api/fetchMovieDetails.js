import instance from './axiosDefaults';
import API from './constants';

const fetchMovieDetails = async id => {
  const responce = await instance.get(
    `${API.BASE_URL}${API.ENDPOINT.MOVIE_DETAILS}/${id}?language=en-US`
  );

  return responce.data;
};

export default fetchMovieDetails;
