import { useEffect, useRef, useState } from 'react';
import fetchTrendingMovies from 'api/fetchTrendingMovies';
import { useLocation } from 'react-router-dom';
import checkIfErrorNotified from 'js/checkIfErrorNotified';
import STATUS from 'js/statusConstants';
import TrendingMoviesList from 'components/TrendingMoviesList/TrendingMoviesList';
import { HomeContainer } from 'css/containers/HomeContainer';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDDLE);
  const isErrorNotify = useRef(false);
  const location = useLocation();

  useEffect(() => {
    setStatus(STATUS.PENDING);

    const processTrendingMovies = async () => {
      try {
        const { results } = await fetchTrendingMovies();
        setMovies(results);
        setStatus(STATUS.RESOLVED);

        if (!results.length) {
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

    processTrendingMovies();
  }, []);

  return (
    <HomeContainer>
      <h1>Trending Today</h1>

      {status === STATUS.PENDING && <p>Loading...</p>}

      {status === STATUS.RESOLVED && (
        <TrendingMoviesList movies={movies} location={location} />
      )}

      {status === STATUS.REJECTED && <p>We don't have any movies ternding</p>}
    </HomeContainer>
  );
};

export default Home;
