import { FC, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { User } from '../../models/user.model';
import { AuthContext } from './auth.context';

export interface AuthContextProviderProps {
  children: JSX.Element;
}

export const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }): JSX.Element => {
  const { checkExistingAuthorization } = useAuth();
  const existingToken = checkExistingAuthorization();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authToken, setAuthToken] = useState<string>(existingToken);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, setAuthToken, authToken }}>
      {children}
    </AuthContext.Provider>
  );
};