import {
  OPEN_GROUP_FORM,
  CLOSE_GROUP_FORM,
  FETCH_GROUPS,
  GroupActionTypes,
  GroupState,
} from './types';

const initialState: GroupState = {
  groups: [],
  formVisible: false,
};

const groupReducer = (state = initialState, action: GroupActionTypes) => {
  switch (action.type) {
    case OPEN_GROUP_FORM:
      return {
        ...state,
        formVisible: true,
      };
    case CLOSE_GROUP_FORM:
      return {
        ...state,
        formVisible: false,
      };
    case FETCH_GROUPS:
      return {
        ...state,
        groups: action.payload,
      };
    default:
      return state;
  }
};

export default groupReducer;
