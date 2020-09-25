import {
  SIGN_IN,
  UserState,
  UserActionTypes,
} from './types';

const initialState: UserState = {
  name: '',
  email: '',
  isSignIn: false,
};

const userReducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        isSignIn: true,
      };
    default:
      return state;
  }
};

export default userReducer;
