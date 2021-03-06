import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const newAxios = () => {
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
  });

  instance.defaults.headers.post['Content-Type'] = 'application/json';
  instance.defaults.headers.patch['Content-Type'] = 'application/json';
  instance.defaults.headers.common['X-Auth-Token'] = localStorage.getItem('token');

  instance.interceptors.response.use((response) => response, (error) => error.response);

  return instance;
};
