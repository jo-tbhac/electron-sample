import snakecaseKeys from 'snakecase-keys';
import camelcaseKeys from 'camelcase-keys';

import { newAxios } from '../../utils/setUpAxios';
import { SIGN_IN, SignInParams, SignUpParams } from './types';
import { AppDispatch } from '../index';

export const signIn = (params: SignInParams) => async (dispatch: AppDispatch) => {
  const axios = newAxios();
  const response = await axios.post('/sessions', params);

  if (response.status === 200) {
    const { name, email } = camelcaseKeys(response.data);
    dispatch({ type: SIGN_IN, payload: { name, email } });
  }
};

export const signUp = (params: SignUpParams) => async (dispatch: AppDispatch) => {
  const axios = newAxios();
  const snakecaseParams = snakecaseKeys(params);
  const response = await axios.post('/users', snakecaseParams);

  if (response.status === 200) {
    const { name, email } = camelcaseKeys(response.data);
    dispatch({ type: SIGN_IN, payload: { name, email } });
  }
};
