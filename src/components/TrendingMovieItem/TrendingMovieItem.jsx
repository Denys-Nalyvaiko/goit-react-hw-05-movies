import { Link } from 'react-router-dom';

const TrendingMovieItem = ({ location, id, imageSrc, title }) => (
  <li>
    <Link to={`movies/${id}`} state={{ from: location }}>
      <img src={imageSrc} alt={title} height="200" />
      <p>{title}</p>
    </Link>
  </li>
);

export default TrendingMovieItem;
