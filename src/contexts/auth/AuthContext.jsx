import { createContext } from 'react';

const { Provider } = createContext();

export const AuthProvider = ({ children }) => {
  const provide = {};

  return <Provider value={provide}>{children}</Provider>;
};

export default AuthProvider;
