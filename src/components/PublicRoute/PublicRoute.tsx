import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: React.ReactElement;
}

export const PublicRoute: React.FC<Props> = ({ children }) => {
  const token = false;
  return token ? <Navigate to="/home" /> : children;
};
