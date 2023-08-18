import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";

const AuthContext = createContext({
  isAuthenticated: false,
  login: (data: any) => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { getStoredValue, storeValue, clearStorage } = useLocalStorage();
  const isAuthenticated = getStoredValue("auth");
  const router = useRouter();

  function login(data: any) {
    console.log("login ~ data", data);
    storeValue("auth", true);
    router.refresh();
  }

  function logout() {
    clearStorage();
    router.refresh();
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthentication() {
  return useContext(AuthContext);
}
