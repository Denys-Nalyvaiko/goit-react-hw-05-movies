import { Link } from 'react-router-dom';

const MovieDetails = () => (
  <div>
    <p>Movie Details</p>
    <Link to="cast">Cast</Link>
    <Link to="reviews">Reviews</Link>
  </div>
);

export default MovieDetails;
