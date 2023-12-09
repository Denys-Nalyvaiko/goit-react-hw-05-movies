import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import STATUS from 'js/statusConstants';
import fetchSearchMovies from 'api/fetchSearchMovies';
import checkIfErrorNotified from 'js/checkIfErrorNotified';
import stopper from '../../images/stopper_cat_poster.jpg';
import API from 'api/constants';

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
    <>
      <h2>Movies</h2>
      <form action="submit" onSubmit={handleSubmitForm}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>

      {status === STATUS.PENDING && <p>Loading...</p>}

      {status === STATUS.RESOLVED && (
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {movies.map(({ id, title, poster_path }) => {
            const imageSrc = poster_path
              ? API.IMAGE_SRC + poster_path
              : stopper;

            return (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  <img src={imageSrc} alt={title} height="200" />
                  <p>{title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}

      {status === STATUS.REJECTED && <p>We don't have any movie</p>}
    </>
  );
};

export default Movies;
