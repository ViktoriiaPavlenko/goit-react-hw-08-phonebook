import { getUserStatus } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(getUserStatus);
  const shouldRedirect = isLoggedIn && restricted;
  if (!shouldRedirect) {
    return children;
  }
  return <Navigate to={redirectTo} />;
}
