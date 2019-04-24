import { networkConfig } from '@app/config';

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const client: AxiosInstance = axios.create({
  baseURL: networkConfig.apiBaseUrl,
  timeout: networkConfig.apiRequestTimeout,
});

client.interceptors.request.use((config: AxiosRequestConfig) => Promise.resolve(config));
client.interceptors.response.use((response: AxiosResponse) => Promise.resolve(response));

export default client;
