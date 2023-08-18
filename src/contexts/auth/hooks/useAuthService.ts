import { useCustomMutate } from "@/services/hooks/useCustomMutate";
import { AuthToken } from "../types";

export function useAuthService() {
  const { isLoading: isLoggingIn, mutate: mutateLogin } =
    useCustomMutate<AuthToken>({
      setQueriesKeys: ["login"],
      routeName: "login",
    });

  return { isLoggingIn, mutateLogin };
}
