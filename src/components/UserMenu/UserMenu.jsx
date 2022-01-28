import { useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import { useLogoutUserMutation } from '../../redux/auth/auth-reducer';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const name = useSelector(getUserName);
  const [logoutUser] = useLogoutUserMutation();

  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome home, {name}!</span>
      <button type="button" onClick={() => logoutUser()}>
        Log out
      </button>
    </div>
  );
}
