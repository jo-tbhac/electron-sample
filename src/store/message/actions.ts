import camelcaseKeys from 'camelcase-keys';

import { newAxios } from '../../utils/setUpAxios';
import { AppDispatch } from '..';
import { FETCH_MESSAGES } from './types';

// eslint-disable-next-line import/prefer-default-export
export const fetchMessages = (groupId: number) => async (dispatch: AppDispatch) => {
  const axios = newAxios();
  const response = await axios.get(`/groups/${groupId}/messages`);

  if (response.status === 200) {
    const camelizedData = camelcaseKeys(response.data.messages, { deep: true });
    dispatch({ type: FETCH_MESSAGES, payload: camelizedData });
  }
};
