import { Suspense } from 'react';
import {
  HeaderContainer,
  HeaderNavLink,
  HeaderNavigation,
  MainContainer,
} from './SharedLayoutStyled';

const { Outlet } = require('react-router-dom');

const SharedLayout = () => (
  <div>
    <HeaderContainer>
      <HeaderNavigation>
        <HeaderNavLink to="/">Home</HeaderNavLink>
        <HeaderNavLink to="/movies">Movies</HeaderNavLink>
      </HeaderNavigation>
    </HeaderContainer>
    <MainContainer>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </MainContainer>
  </div>
);

export default SharedLayout;
