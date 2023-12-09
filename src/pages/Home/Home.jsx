import { useEffect, useRef, useState } from 'react';
import fetchTrendingMovies from 'api/fetchTrendingMovies';
import { Link, useLocation } from 'react-router-dom';
import checkIfErrorNotified from 'js/checkIfErrorNotified';
import stopper from '../../images/stopper_cat_poster.jpg';
import API from 'api/constants';
import STATUS from 'js/statusConstants';

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
    <>
      <h1>Trending Today</h1>

      {status === STATUS.PENDING && <p>Loading...</p>}

      {status === STATUS.RESOLVED && (
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {movies.map(({ id, title, poster_path }) => {
            const imageSrc = poster_path
              ? API.IMAGE_SRC + poster_path
              : stopper;

            return (
              <li key={id}>
                <Link to={`movies/${id}`} state={{ from: location }}>
                  <img src={imageSrc} alt={title} height="200" />
                  <p>{title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}

      {status === STATUS.REJECTED && <p>We don't have any movies ternding</p>}
    </>
  );
};

export default Home;
