import {Link} from 'react-router-dom';

const NotFound = (): JSX.Element => (
  <div>
    <h1>404</h1>
    <h1>Page not found</h1>
    <Link to='/'>Back to main page</Link>
  </div>
);

export default NotFound;
