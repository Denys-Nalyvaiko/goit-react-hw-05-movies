import { Notify } from 'notiflix';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovieReviews from 'api/fetchMovieReviews';

const Reviews = () => {
  const [reviews, setReviews] = useState(false);
  const { movieId } = useParams();
  const isErrorNotify = useRef(false);

  useEffect(() => {
    const processMovieReviews = async () => {
      try {
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        if (!isErrorNotify.current) {
          isErrorNotify.current = true;
          Notify.failure(error.message);
        }
      }
    };

    processMovieReviews();
  }, [movieId]);

  return (
    <>
      <h3>Reviews</h3>
      {reviews ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
