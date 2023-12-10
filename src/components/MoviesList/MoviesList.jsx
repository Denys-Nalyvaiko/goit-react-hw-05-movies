import API from 'api/constants';
import stopper from '../../images/stopper_cat_poster.jpg';
import MovieItem from 'components/MovieItem/MovieItem';
import { MoviesListContainer } from './MoviesListStyled';

const MoviesList = ({ movies, location }) => (
  <MoviesListContainer>
    {movies.map(({ id, title, poster_path }) => {
      const imageSrc = poster_path ? API.IMAGE_SRC + poster_path : stopper;

      return (
        <MovieItem
          key={id}
          location={location}
          id={id}
          imageSrc={imageSrc}
          title={title}
        />
      );
    })}
  </MoviesListContainer>
);

export default MoviesList;
