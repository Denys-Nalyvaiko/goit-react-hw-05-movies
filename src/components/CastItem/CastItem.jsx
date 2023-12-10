const CastItem = ({ id, imageSrc, name, character }) => (
  <li key={id}>
    <img src={imageSrc} alt={name} height="150" />
    <p>Name: {name}</p>
    <p>Charackter: {character}</p>
  </li>
);

export default CastItem;
