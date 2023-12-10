import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieDetailsContainer = styled.section`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MovieDetailsBackLink = styled(Link)`
  font-size: 18px;

  &:hover {
    color: orange;
  }
`;

export const MovieDetailsLink = styled(NavLink)`
  font-size: 18px;

  &.active,
  &.active:hover {
    color: orange;
  }

  &:hover {
    color: lightyellow;
  }
`;

export const MovieDetailsLinkContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;
