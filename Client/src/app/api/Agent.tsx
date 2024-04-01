import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:5000";

const responsebody = (Response: AxiosResponse) => Response.data;

const request = {
  get: <T,>(url: string) => axios.get<T>(url).then(responsebody),
  post: <T,>(url: string, body: {}) => axios.post<T>(url, body).then(responsebody),
  put: <T,>(url: string, body: {}) => axios.put<T>(url, body).then(responsebody),
  del: <T,>(url: string) => axios.delete<T>(url).then(responsebody),
};

export default request;
