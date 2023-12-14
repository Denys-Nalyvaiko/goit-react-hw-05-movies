import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NotFoundContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const NotFoundLink = styled(Link)`
  font-size: 18px;
  color: lightyellow;
  transition: color 250ms ease-in-out 50ms;

  &:hover {
    color: orange;
  }
`;
