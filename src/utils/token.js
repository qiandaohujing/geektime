import Cookies from 'js-cookie';

const TokenKey = 'token';

export function getToken() {
  return Cookies.get(TokenKey);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

export function setToken(token){
  // var exp = new Date();
  // exp.setTime(exp.getTime() + 60 * 2000);//过期时间 2分钟
  return Cookies.set(TokenKey, token, { expires: 1});
}