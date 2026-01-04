// src/context/AuthContext.tsx
import { createContext, ReactNode, useState, useEffect } from 'react';
import { AuthContextType } from '../types/AuthContextType';
import { getToken, clearAuth } from '../auth/auth.storage';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(getToken());

  const login = (newToken: string) => setToken(newToken);
  
  const logout = () => {
    clearAuth();
    setToken(null);
    window.location.href = '/login';
  };

  useEffect(() => {
    setToken(getToken());
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
