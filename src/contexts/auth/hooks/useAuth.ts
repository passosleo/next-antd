import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import { useAuthService } from "./useAuthService";
import { parseJwt } from "@/utils/functions/jwt";
import { useState } from "react";

export function useAuth() {
  const { getStoredValue, storeValue, clearStorage } = useLocalStorage();
  const { mutateLogin, isLoggingIn } = useAuthService();
  const router = useRouter();
  const session = getStoredValue("session");
  const { exp, user } = parseJwt(session?.token) || {};
  const [currentUser, setCurrentUser] = useState(user || undefined);

  function isAuthenticated() {
    if (!session || !session.token || !exp) {
      return false;
    }
    const now = new Date().getTime() / 1000;
    return now < exp;
  }

  function login(data: any) {
    mutateLogin(
      { payload: data },
      {
        onSuccess: (res) => {
          const jwt = res.data;
          const { user, ...session } = parseJwt(jwt.token);
          storeValue("session", { ...jwt, ...session, user });
          setCurrentUser(user);
          router.refresh();
        },
      }
    );
  }

  function logout() {
    clearStorage();
    router.refresh();
  }

  return {
    isAuthenticated: isAuthenticated(),
    login,
    logout,
    user: currentUser,
    isLoggingIn,
  };
}
