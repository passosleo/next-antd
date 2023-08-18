import { useLoginService } from "./useLoginService";

export function useLogin() {
  const { login, isLoading } = useLoginService();
  return {
    login,
    isLoading,
  };
}
