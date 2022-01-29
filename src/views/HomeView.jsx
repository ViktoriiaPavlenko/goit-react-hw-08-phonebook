import { Link } from 'react-router-dom';

const HomeView = () => (
  <h3>
    To enter your phonebook you should <Link to="login">Log in </Link>
    or <Link to="register">Register</Link>
  </h3>
);

export default HomeView;
