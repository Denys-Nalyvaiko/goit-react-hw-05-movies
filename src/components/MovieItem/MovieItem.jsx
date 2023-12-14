import { Link } from 'react-router-dom';
import { MovieItemStyled, MovieTitle } from './MovieItemStyled';

const MovieItem = ({ location, id, imageSrc, title }) => (
  <MovieItemStyled>
    <Link to={`/movies/${id}`} state={{ from: location }}>
      <img src={imageSrc} alt={title} width="250" />
      <MovieTitle>{title}</MovieTitle>
    </Link>
  </MovieItemStyled>
);

export default MovieItem;
