import CastItem from 'components/CastItem/CastItem';
import stopper from '../../images/stopper_cat.jpg';
import API from 'api/constants';

const CastList = ({ cast }) => (
  <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
    {cast.map(({ id, name, character, profile_path }) => {
      const imageSrc = profile_path ? API.IMAGE_SRC + profile_path : stopper;

      return (
        <CastItem
          key={id}
          id={id}
          imageSrc={imageSrc}
          name={name}
          character={character}
        />
      );
    })}
  </ul>
);

export default CastList;
