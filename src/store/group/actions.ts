import camelcaseKeys from 'camelcase-keys';
import snakecaseKeys from 'snakecase-keys';

import { AppDispatch } from '..';
import { newAxios } from '../../utils/setUpAxios';
import {
  Member,
  OPEN_GROUP_FORM,
  CLOSE_GROUP_FORM,
  FETCH_GROUPS,
  SEARCH_MEMBER,
  SEARCH_START,
  SEARCH_END,
  APPEND_MEMBER,
  REMOVE_MEMBER,
  CREATE_GROUP,
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

export const searchMember = (keyword: string) => async (dispatch: AppDispatch) => {
  const axios = newAxios();
  const response = await axios.get('/users', { params: { keyword } });

  if (response.status === 200) {
    dispatch({ type: SEARCH_MEMBER, payload: response.data.users });
  }
};

export const seacrhStart = () => ({
  type: SEARCH_START,
});

export const searchEnd = () => ({
  type: SEARCH_END,
});

export const appendMember = (member: Member) => ({
  type: APPEND_MEMBER,
  payload: member,
});

export const removeMember = (memberId: number) => ({
  type: REMOVE_MEMBER,
  payload: memberId,
});

export const createGroup = (name: string, userIds: number[]) => async (dispatch: AppDispatch) => {
  const axios = newAxios();
  const params = snakecaseKeys({ name, userIds });
  const response = await axios.post('/groups', params);

  if (response.status === 200) {
    const camelizedData = camelcaseKeys(response.data.group);
    dispatch({ type: CREATE_GROUP, payload: camelizedData });
  }
};
