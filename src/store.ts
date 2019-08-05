import { configureStore } from 'redux-starter-kit';
import { combineReducers } from 'redux';
import { user } from '@ducks';
import User from '@src/types/User';

export interface Store {
  user: User | null;
}

const reducer = combineReducers({
  user: user.reducer,
});

const preloadedState = {
  user: null,
  // topics: [],
  // cards: [],
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
});

export default store;
