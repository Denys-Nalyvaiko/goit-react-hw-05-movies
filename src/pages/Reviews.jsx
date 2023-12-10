import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovieReviews from 'api/fetchMovieReviews';
import checkIfErrorNotified from 'js/checkIfErrorNotified';
import STATUS from 'js/statusConstants';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(STATUS.IDDLE);
  const { movieId } = useParams();
  const isErrorNotify = useRef(false);

  useEffect(() => {
    setStatus(STATUS.PENDING);

    const processMovieReviews = async () => {
      try {
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
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

    processMovieReviews();
  }, [movieId]);

  return (
    <>
      <h3>Reviews</h3>

      {status === STATUS.PENDING && <p>Loading...</p>}

      {status === STATUS.RESOLVED && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}

      {status === STATUS.REJECTED && (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
