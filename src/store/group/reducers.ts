import {
  FETCH_GROUPS,
  GroupActionTypes,
  GroupState,
} from './types';

const initialState: GroupState = {
  groups: [],
};

const groupReducer = (state = initialState, action: GroupActionTypes) => {
  switch (action.type) {
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
