import type { AxiosError } from "axios";
import { routes } from "./router";

export type RoutesName = keyof typeof routes;

export type DefaultResponse<T> = {
  success: boolean;
  error?: string;
  data: T;
  [key: string]: any;
};

export type Params = Record<string, string | string[] | number[]>;

export type CustomAxiosError = AxiosError<DefaultResponse<null>>;
