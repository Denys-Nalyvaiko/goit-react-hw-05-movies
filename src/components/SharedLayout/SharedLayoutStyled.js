import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 16px;
  background-color: #1c1c1c;
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const HeaderNavLink = styled(NavLink)`
  font-size: 18px;

  &.active,
  &.active:hover {
    color: orange;
  }

  &:hover {
    color: lightyellow;
  }
`;

export const MainContainer = styled.main`
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
