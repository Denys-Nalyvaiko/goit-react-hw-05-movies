import instance from './axiosDefaults';
import API from './constants';

const fetchMovieReviews = async id => {
  const reponce = await instance.get(
    `${API.ENDPOINT.MOVIE_DETAILS}/${id}${API.ENDPOINT.REVIEWS}?${API.QUERY.LANGUAGE}&page=1`
  );

  return await reponce.data;
};

export default fetchMovieReviews;
