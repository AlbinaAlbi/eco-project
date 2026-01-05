import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { logout } from '../../store/slices/AuthSlice/authSlice';

export const DashboardPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};
