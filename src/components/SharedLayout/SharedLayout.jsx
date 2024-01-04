import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import {
  HeaderContainer,
  HeaderNavLink,
  HeaderNavigation,
  MainContainer,
} from './SharedLayoutStyled';

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
