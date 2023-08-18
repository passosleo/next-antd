import { useCustomMutate } from "@/services/hooks/useCustomMutate";

export function useLoginService() {
  const { isLoading, mutate: login } = useCustomMutate({
    setQueriesKeys: ["login"],
    routeName: "login",
  });

  return { isLoading: isLoading, login };
}
