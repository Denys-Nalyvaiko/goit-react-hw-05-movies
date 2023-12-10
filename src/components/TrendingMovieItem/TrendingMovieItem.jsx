import { Link } from 'react-router-dom';
import { TrendingItem, TrendingTitle } from './TrendingMovieItemStyled';

const TrendingMovieItem = ({ location, id, imageSrc, title }) => (
  <TrendingItem>
    <Link to={`movies/${id}`} state={{ from: location }}>
      <img src={imageSrc} alt={title} width="250" />
      <TrendingTitle>{title}</TrendingTitle>
    </Link>
  </TrendingItem>
);

export default TrendingMovieItem;
