import axios from 'axios';
import { getToken, removeToken } from './token'
import { Message } from 'element-ui';

//create an axios instance
const service = axios.create({
  timeout: 100000,//request timeout
});

//request interceptor
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['token'] = getToken
    }
    return config
  },
  error => Promise.reject(error)
)

//response interceptor
service.interceptors.response.use(
  response => {
    if (!response.data.success) {
      Message({
        type: 'error',
        message: response.data.errMsg
      })
      if (response.data.errCode == 'LOGIN_ERROR') {
        removeToken();
        window.location.reload();
      }
    }
    return response.data;
  },
  error => {
    if (service.loading) {
      service.loading.close();
    }
    // console.log(error);
    return Promise.reject(error);
  }
);

export default service;