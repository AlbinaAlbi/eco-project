import { Navigate } from 'react-router-dom';
import { JSX, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

type Props = {
  children: JSX.Element;
};

export const PrivateRoute = ({ children }: Props) => {
  const auth = useContext(AuthContext);

  if (!auth?.token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
