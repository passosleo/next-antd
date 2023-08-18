import { useCustomQuery } from "@/services/hooks/useCustomQuery";
import { User } from "../types";

export function useUsersService() {
  const {
    data: usersResponse,
    isLoading: isLoadingUsers,
    isFetching: isFetchingUsers,
  } = useCustomQuery<User[]>({
    queriesKeys: ["getUsers"],
    routeName: "getUsers",
  });

  return {
    users: usersResponse?.data || [],
    isLoading: isLoadingUsers || isFetchingUsers,
  };
}
