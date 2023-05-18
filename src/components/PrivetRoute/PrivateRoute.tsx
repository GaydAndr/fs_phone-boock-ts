import { Navigate } from 'react-router-dom';

interface Props {
  children: React.ReactElement;
}

export const PrivateRoute: React.FC<Props> = ({ children }) => {
  const token = false;
  return token ? children : <Navigate to="/auth" />;
};
