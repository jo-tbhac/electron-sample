import camelcaseKeys from 'camelcase-keys';

import { FETCH_GROUPS } from './types';
import { AppDispatch } from '..';
import { newAxios } from '../../utils/setUpAxios';

// eslint-disable-next-line import/prefer-default-export
export const fetchGroups = () => async (dispatch: AppDispatch) => {
  const axios = newAxios();
  const response = await axios.get('/groups');

  if (response.status === 200) {
    const { groups } = camelcaseKeys(response.data, { deep: true });
    dispatch({ type: FETCH_GROUPS, payload: groups });
  }
};
