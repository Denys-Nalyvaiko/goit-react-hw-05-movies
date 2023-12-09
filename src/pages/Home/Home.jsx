import { useEffect, useRef, useState } from 'react';
import { Notify } from 'notiflix';
import fetchTrendingMovies from 'api/fetchTrendingMovies';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState(false);
  const [isLodaing, setIsLoading] = useState(true);
  const isErrorNotify = useRef(false);
  const location = useLocation();

  useEffect(() => {
    const processTrendingMovies = async () => {
      try {
        const { results } = await fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
        if (!isErrorNotify.current) {
          isErrorNotify.current = true;
          Notify.failure(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    processTrendingMovies();
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      {isLodaing ? (
        <p>Loading...</p>
      ) : movies ? (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Movies trending are not exist</p>
      )}
    </>
  );
};

export default Home;
