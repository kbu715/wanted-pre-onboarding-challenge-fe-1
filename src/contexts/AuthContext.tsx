import { useLocalStorage } from 'hooks/useLocalStorage';
import React, { createContext, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthCtx = {
  user: string | null;
  login: ((data: string) => Promise<void>) | null;
  logout: (() => void) | null;
};

const initialState = {
  user: null,
  login: null,
  logout: null,
};
const AuthContext = createContext<AuthCtx | null>(initialState);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useLocalStorage('user', null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data: string) => {
    setUser(data);
    navigate('/home');
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate('/auth/sign-in', { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
