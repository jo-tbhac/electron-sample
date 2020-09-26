import snakecaseKeys from 'snakecase-keys';

import { newAxios } from '../../utils/setUpAxios';
import { SIGN_IN, SignInParams, SignUpParams } from './types';
import { LOAD_END } from '../loading/types';
import { AppDispatch } from '../index';

export const signIn = (params: SignInParams) => async (dispatch: AppDispatch) => {
  const axios = newAxios();
  const response = await axios.post('/sessions', params);

  if (response.status === 200) {
    const { name, email, token } = response.data;
    localStorage.setItem('token', token);
    dispatch({ type: SIGN_IN, payload: { name, email } });
  }
};

export const signUp = (params: SignUpParams) => async (dispatch: AppDispatch) => {
  const axios = newAxios();
  const snakecaseParams = snakecaseKeys(params);
  const response = await axios.post('/users', snakecaseParams);

  if (response.status === 200) {
    const { name, email, token } = response.data;
    localStorage.setItem('token', token);
    dispatch({ type: SIGN_IN, payload: { name, email } });
  }
};

export const userAuthentication = () => async (dispatch: AppDispatch) => {
  const axios = newAxios();
  const response = await axios.get('/sessions');

  if (response.status === 200) {
    const { email, name } = response.data;
    dispatch({ type: SIGN_IN, payload: { name, email } });
  }

  dispatch({ type: LOAD_END });
};
