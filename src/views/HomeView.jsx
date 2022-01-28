import { Link } from 'react-router-dom';

const HomeView = () => (
  <>
    <h2>
      <Link to="login">Log in</Link>
    </h2>
    <h2>
      <Link to="register">Register</Link>
    </h2>
  </>
);

export default HomeView;
