import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';

const NotFound = (): JSX.Element => (
  <div>
    <h1>404</h1>
    <h1>Page not found</h1>
    <Link to={AppRoute.MainPage}>Back to main page</Link>
  </div>
);

export default NotFound;
