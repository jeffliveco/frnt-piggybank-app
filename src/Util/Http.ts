import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import Dictionary from './Dictionary';
import { isEmpty } from './Helpers';


const DEFAULT_HEADER = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

const http = <T>(request: AxiosRequestConfig): Promise<AxiosResponse<T>> =>
  new Promise(
    (
      resolve: (r: AxiosResponse<T>) => void,
      reject: (r: AxiosResponse<T>) => void
    ): void => {
      axios
        .request(request)
        .then((response: AxiosResponse<T>) => {
          resolve(response);
        })
        .catch((error: AxiosError<T>) => {
          if (error.response) reject(error.response);
          else if (error.request) reject(error.request);
          else console.debug('Error', error.message);
        });
    }
  );

export const get = async <T>(
  url: string,
  params: Dictionary<string | number | boolean>,
  args: AxiosRequestConfig = { headers: DEFAULT_HEADER }
): Promise<AxiosResponse<T>> => {
  if (!isEmpty(params)) {
    const queryParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      queryParams.append(key, value.toString());
    }
    url = url.concat('?', queryParams.toString());
  }
  return Promise.resolve(
    http<T>({ method: 'GET', url, withCredentials: false, ...args })
  );
};

export const post = async <K, T>(
  url: string,
  data: BodyInit | K,
  args: AxiosRequestConfig = { headers: DEFAULT_HEADER }
): Promise<AxiosResponse<T>> => {
  return http<T>({ method: 'POST', url, withCredentials: false, data, ...args });
};

export const put = async <K, T>(
  url: string,
  data: BodyInit | K,
  args: AxiosRequestConfig = { headers: DEFAULT_HEADER }
): Promise<AxiosResponse<T>> => {
  return http<T>({ method: 'PUT', url, withCredentials: false, data, ...args });
};