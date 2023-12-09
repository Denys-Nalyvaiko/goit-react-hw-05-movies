import instance from './axiosDefaults';
import API from './constants';

const fetchMovieDetails = async id => {
  const responce = await instance.get(
    `${API.BASE_URL}${API.ENDPOINT.MOVIE_DETAILS}/${id}?${API.QUERY.LANGUAGE}`
  );

  return responce.data;
};

export default fetchMovieDetails;
