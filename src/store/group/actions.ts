import camelcaseKeys from 'camelcase-keys';

import { AppDispatch } from '..';
import { newAxios } from '../../utils/setUpAxios';
import {
  OPEN_GROUP_FORM,
  CLOSE_GROUP_FORM,
  FETCH_GROUPS,
} from './types';

export const openGroupForm = () => ({
  type: OPEN_GROUP_FORM,
});

export const closeGroupForm = () => ({
  type: CLOSE_GROUP_FORM,
});

export const fetchGroups = () => async (dispatch: AppDispatch) => {
  const axios = newAxios();
  const response = await axios.get('/groups');

  if (response.status === 200) {
    const { groups } = camelcaseKeys(response.data, { deep: true });
    dispatch({ type: FETCH_GROUPS, payload: groups });
  }
};
