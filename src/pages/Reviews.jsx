import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovieReviews from 'api/fetchMovieReviews';
import checkIfErrorNotified from 'js/checkIfErrorNotified';
import STATUS from 'js/statusConstants';
import {
  ReviewsContainer,
  ReviewsItemContainer,
  ReviewsListContainer,
  ReviewsTitle,
} from 'css/containers/ReviewsContainer';
import Loader from 'components/Loader/Loader';

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
    <ReviewsContainer>
      <ReviewsTitle>Reviews</ReviewsTitle>

      {status === STATUS.PENDING && <Loader />}

      {status === STATUS.RESOLVED && (
        <ReviewsListContainer>
          {reviews.map(({ id, author, content }) => (
            <ReviewsItemContainer key={id}>
              <p>
                <b>Author: {author}</b>
              </p>
              <p>{content}</p>
            </ReviewsItemContainer>
          ))}
        </ReviewsListContainer>
      )}

      {status === STATUS.REJECTED && (
        <p>We don't have any reviews for this movie</p>
      )}
    </ReviewsContainer>
  );
};

export default Reviews;
