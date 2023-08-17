import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const AuthContext = createContext({
  isAuthenticated: false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { getStoredValue } = useLocalStorage();
  const isAuthenticated = getStoredValue("auth");

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthentication = () => {
  return useContext(AuthContext);
};
