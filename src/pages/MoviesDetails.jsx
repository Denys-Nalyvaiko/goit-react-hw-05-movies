import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import fetchMovieDetails from 'api/fetchMovieDetails';
import checkIfErrorNotified from 'js/checkIfErrorNotified';
import STATUS from 'js/statusConstants';
import MovieDetailsInfo from 'components/MovieDetailsInfo/MovieDetailsInfo';
import {
  MovieDetailsBackLink,
  MovieDetailsContainer,
  MovieDetailsLink,
  MovieDetailsLinkContainer,
} from 'css/containers/MoviesDetailsContainer';

const MovieDetails = () => {
  const [movie, setMovie] = useState(false);
  const [status, setStatus] = useState(STATUS.IDDLE);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  const isErrorNotify = useRef(false);

  useEffect(() => {
    setStatus(STATUS.PENDING);

    const processMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
        setStatus(STATUS.RESOLVED);
      } catch ({ message }) {
        isErrorNotify.current = checkIfErrorNotified(
          isErrorNotify.current,
          message
        );

        setStatus(STATUS.REJECTED);
      }
    };

    processMovieDetails();
  }, [movieId]);

  return (
    <MovieDetailsContainer>
      <MovieDetailsBackLink to={backLinkRef.current}>
        Go back
      </MovieDetailsBackLink>

      {status === STATUS.PENDING && <p>Loading...</p>}

      {status === STATUS.RESOLVED && (
        <div>
          <MovieDetailsInfo movie={movie} />
          <MovieDetailsLinkContainer>
            <MovieDetailsLink to="cast">Cast</MovieDetailsLink>
            <MovieDetailsLink to="reviews">Reviews</MovieDetailsLink>
          </MovieDetailsLinkContainer>
          <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
          </Suspense>
        </div>
      )}

      {status === STATUS.REJECTED && <p>We don't have movie details</p>}
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
