import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import { useAuthService } from "./useAuthService";

export function useAuth() {
  const { getStoredValue, storeValue, clearStorage } = useLocalStorage();
  const isAuthenticated = getStoredValue("auth");
  const router = useRouter();
  const { mutateLogin, isLoggingIn } = useAuthService();

  function login(data: any) {
    mutateLogin(
      { payload: data },
      {
        onSuccess: (data) => {
          console.log("mutateLogin ~ data", data);
          storeValue("auth", true);
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
    isAuthenticated,
    login,
    logout,
    isLoggingIn,
  };
}
