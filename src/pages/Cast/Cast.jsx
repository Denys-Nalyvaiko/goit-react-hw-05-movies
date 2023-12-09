import { Notify } from 'notiflix';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from 'api/constants';
import fetchMovieCast from 'api/fetchMovieCast';
import stopper from '../../images/stopper_cat.jpg';

const Cast = () => {
  const [cast, setCast] = useState(false);
  const { movieId } = useParams();
  const isErrorNotify = useRef(false);

  useEffect(() => {
    const processMovieCast = async () => {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data.cast);
      } catch (error) {
        if (!isErrorNotify.current) {
          isErrorNotify.current = true;
          Notify.failure(error.message);
        }
      }
    };

    processMovieCast();
  }, [movieId]);

  return (
    <>
      <h3>Cast</h3>
      {cast ? (
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
      ) : (
        <p>Cast is not exist</p>
      )}
    </>
  );
};

export default Cast;
