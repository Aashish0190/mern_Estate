import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  const { currentuser } = useSelector((state) => state.user); // Ensure correct state key
  return currentuser ? <Outlet /> : <Navigate to='/sign-in' />; // Redirects to sign-in if not logged in
}
