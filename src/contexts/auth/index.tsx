import { createContext, useContext } from "react";
import { useAuth } from "./hooks/useAuth";

const AuthContext = createContext({
  isAuthenticated: false,
  login: (data: any) => {},
  logout: () => {},
  isLoggingIn: false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoggingIn, login, logout } = useAuth();
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, isLoggingIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthentication() {
  return useContext(AuthContext);
}
