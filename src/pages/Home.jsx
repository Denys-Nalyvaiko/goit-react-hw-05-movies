import { useEffect, useRef, useState } from 'react';
import fetchTrendingMovies from 'api/fetchTrendingMovies';
import checkIfErrorNotified from 'js/checkIfErrorNotified';
import STATUS from 'js/statusConstants';
import { HomeContainer } from 'css/containers/HomeContainer';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDDLE);
  const isErrorNotify = useRef(false);

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

      {status === STATUS.PENDING && <Loader />}

      {status === STATUS.RESOLVED && <MoviesList movies={movies} />}

      {status === STATUS.REJECTED && <p>We don't have any movies ternding</p>}
    </HomeContainer>
  );
};

export default Home;
