import API from 'api/constants';
import stopper from '../../images/stopper_cat_poster.jpg';
import TrendingMovieItem from 'components/TrendingMovieItem/TrendingMovieItem';
import { TrendingListContainer } from './TrendingMoviesListStyled';

const TrendingMoviesList = ({ movies, location }) => (
  <TrendingListContainer>
    {movies.map(({ id, title, poster_path }) => {
      const imageSrc = poster_path ? API.IMAGE_SRC + poster_path : stopper;

      return (
        <TrendingMovieItem
          key={id}
          location={location}
          id={id}
          imageSrc={imageSrc}
          title={title}
        />
      );
    })}
  </TrendingListContainer>
);

export default TrendingMoviesList;
