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
      <Outlet />
    </main>
  </div>
);

export default SharedLayout;
