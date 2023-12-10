import { useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import fetchSearchMovies from 'api/fetchSearchMovies';
import STATUS from 'js/statusConstants';
import checkIfErrorNotified from 'js/checkIfErrorNotified';
import MoviesList from 'components/MoviesList/MoviesList';
import {
  MoviesContainer,
  MoviesForm,
  MoviesInput,
  MoviesSubmitButton,
} from 'css/containers/MoviesContainer';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDDLE);
  const isErrorNotify = useRef(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    setStatus(STATUS.PENDING);

    const processSearchMovies = async () => {
      try {
        const data = await fetchSearchMovies(query);
        setMovies(data.results);
        setStatus(STATUS.RESOLVED);

        if (!data.results.length) {
          setStatus(STATUS.REJECTED);
        }
      } catch ({ message }) {
        isErrorNotify.current = checkIfErrorNotified(
          isErrorNotify.current,
          message
        );

        setStatus(STATUS.REJECTED);
      }
    };

    processSearchMovies();
  }, [query]);

  const handleSubmitForm = event => {
    event.preventDefault();

    const { value } = event.target.query;
    const nextParams = value.trim() !== '' ? { query: value.trim() } : {};
    setSearchParams(nextParams);

    event.currentTarget.reset();
  };

  return (
    <MoviesContainer>
      <h2>Movies</h2>
      <MoviesForm action="submit" onSubmit={handleSubmitForm}>
        <MoviesInput type="text" name="query" />
        <MoviesSubmitButton type="submit">Search</MoviesSubmitButton>
      </MoviesForm>

      {status === STATUS.PENDING && <Loader />}

      {status === STATUS.RESOLVED && (
        <MoviesList movies={movies} location={location} />
      )}

      {status === STATUS.REJECTED && <p>We don't have any movie</p>}
    </MoviesContainer>
  );
};

export default Movies;
