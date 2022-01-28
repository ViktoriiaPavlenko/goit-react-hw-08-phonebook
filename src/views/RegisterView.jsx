import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRegisterUserMutation } from '../redux/auth/auth-reducer';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerUser] = useRegisterUserMutation();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = { name, email, password };
    registerUser(newUser);
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Register form</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={handleChange}
          />
        </label>

        <label>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={handleChange}
          />
        </label>

        <button type="submit">Register</button>
        <p>
          Already have an account?<Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}
