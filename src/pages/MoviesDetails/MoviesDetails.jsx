import { Link } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <>
      <p>Movie Details</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
    </>
  );
};

export default MovieDetails;
