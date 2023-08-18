import { useLocalStorage } from "@/hooks/useLocalStorage";
import { AxiosInstance } from "axios";

export function setRequestAuth(request: AxiosInstance) {
  const { getStoredValue } = useLocalStorage();
  const session = getStoredValue("session");
  const token = session?.token;

  if (token) {
    request.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
}
