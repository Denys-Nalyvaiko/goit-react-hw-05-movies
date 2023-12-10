import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from 'api/constants';
import fetchMovieCast from 'api/fetchMovieCast';
import stopper from '../images/stopper_cat.jpg';
import checkIfErrorNotified from 'js/checkIfErrorNotified';
import STATUS from 'js/statusConstants';

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
    <>
      <h3>Cast</h3>

      {status === STATUS.PENDING && <p>Loading...</p>}

      {status === STATUS.RESOLVED && (
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {cast.map(({ id, name, character, profile_path }) => {
            const imageSrc = profile_path
              ? API.IMAGE_SRC + profile_path
              : stopper;

            return (
              <li key={id}>
                <img src={imageSrc} alt={name} height="150" />
                <p>Name: {name}</p>
                <p>Charackter: {character}</p>
              </li>
            );
          })}
        </ul>
      )}

      {status === STATUS.REJECTED && (
        <p>We don't have any cast for this movie</p>
      )}
    </>
  );
};

export default Cast;
