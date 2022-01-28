import { useState } from 'react';
import { useLoginUserMutation } from '../redux/auth/auth-reducer';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser] = useLoginUserMutation();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    const userData = { email, password };
    loginUser(userData);
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Log in</h1>

      <form onSubmit={handleSubmit}>
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

        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
