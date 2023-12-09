import { Notify } from 'notiflix';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import API from 'api/constants';
import fetchMovieDetails from 'api/fetchMovieDetails';

const MovieDetails = () => {
  const [movie, setMovie] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  const isErrorNotify = useRef(false);

  useEffect(() => {
    const processMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        if (!isErrorNotify.current) {
          isErrorNotify.current = true;
          Notify.failure(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    processMovieDetails();
  }, [movieId]);

  const { title, vote_average, overview, genres, poster_path } = movie;
  const imageSrc = API.IMAGE_SRC + poster_path;

  return (
    <>
      <Link to={backLinkRef.current}>Go back</Link>
      {isLoading ? (
        <p>Loading...</p>
      ) : movie ? (
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
                {genres.map(({ id, name }) => (
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
      ) : (
        <p>Movie details are not exist</p>
      )}
    </>
  );
};

export default MovieDetails;
