import API from 'api/constants';
import stopper from '../../images/stopper_cat_poster.jpg';
import {
  MovieDetailedSubInformation,
  MovieDetailsGenresList,
  MovieDetailsImageContainer,
  MovieDetailsInfoContainer,
  MovieDetailsSectionContainer,
  MovieDetailsTitle,
} from './MovieDetailsInfoStyled';

const MovieDetailsInfo = ({ movie }) => {
  const { title, vote_average, overview, genres, poster_path } = movie;
  const imageSrc = poster_path ? API.IMAGE_SRC + poster_path : stopper;

  return (
    <MovieDetailsSectionContainer>
      <MovieDetailsImageContainer>
        <img src={imageSrc} alt={title} width="300" />
      </MovieDetailsImageContainer>
      <MovieDetailsInfoContainer>
        <MovieDetailsTitle>{title}</MovieDetailsTitle>
        <MovieDetailedSubInformation>
          <p>
            <b>User score:</b> {Math.round(vote_average * 10)}%
          </p>
          <h4>Overview</h4>
          <p>{overview}</p>
          <h4>Genres</h4>
          <MovieDetailsGenresList>
            {genres?.map(({ id, name }) => (
              <li key={id}>
                <p>{name}</p>
              </li>
            ))}
          </MovieDetailsGenresList>
        </MovieDetailedSubInformation>
      </MovieDetailsInfoContainer>
    </MovieDetailsSectionContainer>
  );
};

export default MovieDetailsInfo;
