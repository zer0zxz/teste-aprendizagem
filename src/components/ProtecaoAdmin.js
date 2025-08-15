import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtecaoAdmin({ children }) {
  const adminLogado = localStorage.getItem('adminLogado') === 'true';

  if (!adminLogado) {
    return <Navigate to="/adminlogin" replace />;
  }

  return children;
}
