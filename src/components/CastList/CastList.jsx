import CastItem from 'components/CastItem/CastItem';
import stopper from '../../images/stopper_cat.jpg';
import API from 'api/constants';
import { CastListContainer } from './CastListStyled';

const CastList = ({ cast }) => (
  <CastListContainer>
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
  </CastListContainer>
);

export default CastList;
