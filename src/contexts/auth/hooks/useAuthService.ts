import { useCustomMutate } from "@/services/hooks/useCustomMutate";

export function useAuthService() {
  const { isLoading: isLoggingIn, mutate: mutateLogin } = useCustomMutate({
    setQueriesKeys: ["login"],
    routeName: "login",
  });

  return { isLoggingIn, mutateLogin };
}
