import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './user/reducers';

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store;
