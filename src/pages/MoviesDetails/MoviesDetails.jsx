import fetchMovieDetails from 'api/fetchMovieDetails';
import { Notify } from 'notiflix';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState(false);
  const isErrorNotify = useRef(false);
  const { movieId } = useParams();

  useEffect(() => {
    const processMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        // console.log(data);
        setMovie(data);
      } catch (error) {
        if (!isErrorNotify.current) {
          isErrorNotify.current = true;
          Notify.failure(error.message);
        }
      }
    };

    processMovieDetails();
  }, [movieId]);

  const { title, vote_average, overview, genres, poster_path } = movie;
  const imageSrc = 'https://image.tmdb.org/t/p/w500' + poster_path;

  return (
    <>
      {movie ? (
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
        <p>Movie details is not exist</p>
      )}
    </>
  );
};

export default MovieDetails;
