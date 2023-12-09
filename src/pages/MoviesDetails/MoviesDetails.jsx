import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import API from 'api/constants';
import fetchMovieDetails from 'api/fetchMovieDetails';
import checkIfErrorNotified from 'js/checkIfErrorNotified';
import STATUS from 'js/statusConstants';
import stopper from '../../images/stopper_cat_poster.jpg';

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

  const { title, vote_average, overview, genres, poster_path } = movie;
  const imageSrc = poster_path ? API.IMAGE_SRC + poster_path : stopper;

  return (
    <>
      <Link to={backLinkRef.current}>Go back</Link>

      {status === STATUS.PENDING && <p>Loading...</p>}

      {status === STATUS.RESOLVED && (
        <div>
          <div style={{ display: 'flex' }}>
            <div>
              <img src={imageSrc} alt={title} height="400" />
            </div>
            <div>
              <h3>{title}</h3>
              <p>User score: {Math.round(vote_average * 10)}%</p>
              <p>Overview</p>
              <p>{overview}</p>
              <p>Genres</p>
              <ul>
                {genres?.map(({ id, name }) => (
                  <li key={id}>
                    <p>{name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
          <Outlet />
        </div>
      )}

      {status === STATUS.REJECTED && <p>We don't have movie details</p>}
    </>
  );
};

export default MovieDetails;
