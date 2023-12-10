import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovieCast from 'api/fetchMovieCast';
import checkIfErrorNotified from 'js/checkIfErrorNotified';
import STATUS from 'js/statusConstants';
import CastList from 'components/CastList/CastList';
import { CastContainer, CastTitle } from 'css/containers/CastContainer';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(STATUS.IDDLE);
  const { movieId } = useParams();
  const isErrorNotify = useRef(false);

  useEffect(() => {
    setStatus(STATUS.PENDING);

    const processMovieCast = async () => {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data.cast);
        setStatus(STATUS.RESOLVED);

        if (!data.cast.length) {
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

    processMovieCast();
  }, [movieId]);

  return (
    <CastContainer>
      <CastTitle>Cast</CastTitle>

      {status === STATUS.PENDING && <p>Loading...</p>}

      {status === STATUS.RESOLVED && <CastList cast={cast} />}

      {status === STATUS.REJECTED && (
        <p>We don't have any cast for this movie</p>
      )}
    </CastContainer>
  );
};

export default Cast;
