import request from '@/utils/request';
const baseURL = '/api';

/**
 * @description register
 * @description url=/register
 * @param {} data.userName
 * @param {} data.password
 * 
 * @returns {boolean}
 */
export function register(data) {
  const url = `${baseURL}/register`
  return request({
    url,
    data,
    method: 'POST',
    loading: true
  })
}

/**
 * @description login
 * @description url=/login
 * @param {} data.userName
 * @param {} data.password
 * 
 * @returns {boolean}
 */
export function login(data) {
  const url = `${baseURL}/upload`
  // const url = 'https://www.easy-mock.com/mock/5c34a1dd571e3a7876576640/example/upload'
  return request({
    url,
    data,
    method: 'POST',
    loading: true
  })
}