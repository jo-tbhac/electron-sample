import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import groupReducer from './group/reducers';
import loadingReducer from './loading/reducers';
import userReducer from './user/reducers';

const rootReducer = combineReducers({
  group: groupReducer,
  loading: loadingReducer,
  user: userReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store;
