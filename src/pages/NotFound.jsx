import {
  NotFoundContainer,
  NotFoundLink,
} from 'css/containers/NotFoundContainer';

const NotFound = () => (
  <NotFoundContainer>
    <h1>404 Not Found</h1>
    <NotFoundLink to="/">Go Home</NotFoundLink>
  </NotFoundContainer>
);
export default NotFound;
