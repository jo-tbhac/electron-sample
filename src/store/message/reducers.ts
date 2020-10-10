import {
  SELECT_GROUP,
  FETCH_MESSAGES,
  MessageState,
  MessageActionTypes,
} from './types';

const initialState: MessageState = {
  messages: [],
  targetGroupId: 0,
};

const messageReducer = (state = initialState, action: MessageActionTypes) => {
  switch (action.type) {
    case SELECT_GROUP:
      return {
        ...state,
        targetGroupId: action.payload,
      };
    case FETCH_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    default:
      return state;
  }
};

export default messageReducer;
