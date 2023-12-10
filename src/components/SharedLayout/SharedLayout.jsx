import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MainContainer>
  </div>
);

export default SharedLayout;
