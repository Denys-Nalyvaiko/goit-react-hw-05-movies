import { CastItemContainer } from './CastItemStyled';

const CastItem = ({ id, imageSrc, name, character }) => (
  <CastItemContainer key={id}>
    <img src={imageSrc} alt={name} width="140" />
    <p>
      <b>Name:</b> {name}
    </p>
    <p>
      <b>Charackter:</b> {character}
    </p>
  </CastItemContainer>
);

export default CastItem;
