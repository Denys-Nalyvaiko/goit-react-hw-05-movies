import { Suspense } from 'react';

const { NavLink, Outlet } = require('react-router-dom');

const SharedLayout = () => (
  <div>
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
    </header>
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </main>
  </div>
);

export default SharedLayout;
