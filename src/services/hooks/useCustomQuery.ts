import { DefaultResponse, Params, RoutesName } from "../types";
import { useMiddleware } from "../middleware/useMiddleware";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { QueryOptions } from "@/types/react-query";
import { useAxiosUtils } from "@/hooks/useAxiosUtils";

export type CustomQueryProps<T> = {
  onError?: (error: any) => void;
  onSuccess?: (data: DefaultResponse<T>) => void;
  queryOptions?: QueryOptions;
  notHandleError?: boolean;
  queriesKeys: QueryKey;
  routeName: RoutesName;
  enabled?: boolean;
  params?: Params;
  query?: Params;
};

export function useCustomQuery<ReturnData>({
  queriesKeys,
  enabled = true,
  notHandleError,
  queryOptions,
  routeName,
  params,
  query: queryParam,
  ...statusFunctions
}: CustomQueryProps<ReturnData>) {
  const { requestAxios } = useMiddleware();
  const { handleAxiosError } = useAxiosUtils();

  function onError(error: any) {
    if (!notHandleError) handleAxiosError(error);
    if (statusFunctions.onError) onError(statusFunctions.onError);
  }

  function onSuccess(data: DefaultResponse<ReturnData>) {
    if (statusFunctions.onSuccess) statusFunctions.onSuccess(data);
  }
  function handleQuery() {
    return requestAxios({
      routeName,
      params,
      query: queryParam,
    }).then((res) => res.data);
  }
  const query = useQuery(queriesKeys as QueryKey, handleQuery, {
    onSuccess,
    onError,
    enabled,
  });

  return query;
}
