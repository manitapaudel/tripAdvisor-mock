import React from "react";

export const UserContext = React.createContext({});
type AuthProviderProps = {
    children: React.ReactNode
}

const AuthProvider: React.FC <AuthProviderProps> = ({ children }) => {
  return <UserContext.Provider value="Hellow!">{children}</UserContext.Provider>;
};

export default AuthProvider
