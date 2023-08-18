import { useQueryClient, useMutation, QueryKey } from "@tanstack/react-query";
import { DefaultResponse, Params, RoutesName } from "../types";
import { useMiddleware } from "../middleware/useMiddleware";
import { AxiosError, AxiosRequestConfig } from "axios";
import { useAxiosUtils } from "@/hooks/useAxiosUtils";

export type CustomMutationProps<T = any> = {
  axiosConfig?: AxiosRequestConfig<any>;
  invalidateQueriesKeys?: QueryKey;
  onError?: (error: any) => void;
  setQueriesKeys?: string[];
  onSuccess?: (data?: DefaultResponse<T>) => void;
  routeName: RoutesName;
  notHandleError?: boolean;
};

export function useCustomMutate<ReturnData, Payload = any>({
  invalidateQueriesKeys,
  axiosConfig = {},
  notHandleError,
  setQueriesKeys,
  routeName,
  ...statusFunctions
}: CustomMutationProps<ReturnData>) {
  const { requestAxios } = useMiddleware();
  const queryClient = useQueryClient();
  const { handleAxiosError } = useAxiosUtils();

  function onError(error: AxiosError<any>) {
    if (!notHandleError) {
      handleAxiosError(error);
    }

    statusFunctions.onError?.(error);
  }

  function onSuccess(data: DefaultResponse<ReturnData>) {
    queryClient.invalidateQueries(invalidateQueriesKeys);
    if (setQueriesKeys) queryClient.setQueryData(setQueriesKeys, data);
    statusFunctions.onSuccess?.(data);
  }

  function handleMutate({
    payload,
    params,
    query,
  }: {
    payload?: Payload;
    params?: Params;
    query?: Params;
  }) {
    return requestAxios({
      config: axiosConfig,
      routeName,
      payload,
      params,
      query,
    }).then((res) => res.data) as Promise<DefaultResponse<ReturnData>>;
  }

  return useMutation(handleMutate, {
    onSuccess: (data: DefaultResponse<ReturnData>) =>
      onSuccess(data as DefaultResponse<ReturnData>),
    onError,
  });
}
