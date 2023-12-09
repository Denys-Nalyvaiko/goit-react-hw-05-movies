import { useEffect, useState } from 'react';
import { Notify } from 'notiflix';
import fetchSearchMovies from 'api/fetchSearchMovies';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    setIsLoading(true);

    const processSearchMovies = async () => {
      try {
        const data = await fetchSearchMovies(query);
        setMovies(data.results);
      } catch (error) {
        Notify.failure(error.message);
      } finally {
        setIsLoading(false);
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
      {isLoading ? (
        <p>Loading...</p>
      ) : movies.length ? (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Movies with this query are not exist</p>
      )}
    </>
  );
};

export default Movies;
