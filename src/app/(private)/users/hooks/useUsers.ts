import { useUsersService } from "./useUsersService";

export function useUsers() {
  const { users, isLoading } = useUsersService();
  return {
    users,
    isLoading,
  };
}
