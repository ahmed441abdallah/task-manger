import { AxiosRequestConfig } from "axios";

export interface IFormInput {
    email: string;
    password: string;
    username: string;

}
export interface ILoginFormInput {
    identifier: string;
    password: string;

}
export interface IErrorResponse {
    error: {
      details?: {
        errors: {
          message: string;
        }[];
      };
      message?: string;
    };
  }
 export interface useAuthFetchProps {
    key: string[];
    url: string;
    config?: AxiosRequestConfig;
}
export interface ITask {
    id: number;
    title: string;
    category: string;
    status: string;
    note: string;
    priority: string;
}
