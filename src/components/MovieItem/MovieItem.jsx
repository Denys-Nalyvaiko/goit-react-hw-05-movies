import { Link } from 'react-router-dom';

const MovieItem = ({ location, id, imageSrc, title }) => (
  <li key={id}>
    <Link to={`${id}`} state={{ from: location }}>
      <img src={imageSrc} alt={title} height="200" />
      <p>{title}</p>
    </Link>
  </li>
);

export default MovieItem;
