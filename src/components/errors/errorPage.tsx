import React from "react";
import { AxiosError } from "axios";
import { Frown } from "lucide-react";

interface ErrorComponentProps {
  error: AxiosError<unknown, any> | null;
}

const hasMessage = (data: unknown): data is { message: string } => {
  return typeof data === "object" && data !== null && "message" in data && typeof (data as any).message === "string";
};

const ErrorPage = ({ error }: ErrorComponentProps) => {
  let errorMessage: React.ReactNode = "An unknown error occurred";

  if (error?.response?.data) {
    const data = error.response.data;
    if (typeof data === "string") {
      errorMessage = data;
    } else if (hasMessage(data)) {
      errorMessage = data.message;
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-[75vh] max-w-[1400px] w-full">
      <Frown color="red" size={100} />
      <p className="text-lg text-center p-2">{errorMessage}</p>
    </div>
  );
};

export default ErrorPage;
