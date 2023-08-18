import { notification } from "antd";
import Axios, { AxiosResponse } from "axios";
import { HOST } from "@/services/router";
import { CustomAxiosError } from "@/services/types";

export function useAxiosUtils() {
  type Props = {
    filePath: string;
    filename: string;
    withAuth?: boolean;
  };

  function handleDownload({ filePath, filename, withAuth = true }: Props) {
    const request = Axios.create({
      baseURL: HOST,
      headers: { responseType: "blob" },
    });

    // if (withAuth) withAuthInstance(request);

    request.get(filePath).then((response: AxiosResponse) => {
      const urlBlob = window.URL.createObjectURL(new Blob([response.data]));
      console.log(urlBlob);
      console.log(response);
      const link = document.createElement("a");
      link.href = urlBlob;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  }

  function handleAxiosError(error: unknown) {
    const messageError = "Tente novamente mais tarde";
    const typedError = error as CustomAxiosError;
    const responseData = typedError.response?.data;

    const responseError = (responseData && responseData.message) as string;

    const descriptionError =
      responseError && typeof responseError === "string"
        ? responseError
        : messageError;

    notification.error({
      message: "Algo deu errado",
      description: descriptionError,
    });

    return { descriptionError };
  }
  return { handleAxiosError, handleDownload };
}
