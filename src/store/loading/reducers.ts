import {
  LOAD_START,
  LOAD_END,
  LoadingState,
  LoadingActionTypes,
} from './types';

const initialState: LoadingState = {
  loading: true,
};

const loadingReducer = (state = initialState, action: LoadingActionTypes) => {
  switch (action.type) {
    case LOAD_START:
      return {
        ...state,
        loading: true,
      };
    case LOAD_END:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default loadingReducer;
