import {
  FETCH_MESSAGES,
  MessageState,
  MessageActionTypes,
} from './types';

const initialState: MessageState = {
  messages: [],
};

const messageReducer = (state = initialState, action: MessageActionTypes) => {
  switch (action.type) {
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
