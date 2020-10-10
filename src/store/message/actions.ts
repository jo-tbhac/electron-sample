import camelcaseKeys from 'camelcase-keys';

import { newAxios } from '../../utils/setUpAxios';
import { AppDispatch } from '..';
import { SELECT_GROUP, FETCH_MESSAGES } from './types';

export const selectGroup = (groupId: number) => ({
  type: SELECT_GROUP,
  payload: groupId,
});

export const fetchMessages = (groupId: number) => async (dispatch: AppDispatch) => {
  const axios = newAxios();
  const response = await axios.get(`/groups/${groupId}/messages`);

  if (response.status === 200) {
    const camelizedData = camelcaseKeys(response.data.messages, { deep: true });
    dispatch({ type: FETCH_MESSAGES, payload: camelizedData });
  }
};
