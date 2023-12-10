import API from 'api/constants';
import stopper from '../../images/stopper_cat_poster.jpg';

const MovieDetailsInfo = ({ movie }) => {
  const { title, vote_average, overview, genres, poster_path } = movie;
  const imageSrc = poster_path ? API.IMAGE_SRC + poster_path : stopper;

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <img src={imageSrc} alt={title} height="400" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>User score: {Math.round(vote_average * 10)}%</p>
        <p>Overview</p>
        <p>{overview}</p>
        <p>Genres</p>
        <ul>
          {genres?.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetailsInfo;
