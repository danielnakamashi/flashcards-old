import { createSlice } from 'redux-starter-kit';
import User from '@src/types/User';

const userSignIn = (state: User | null, action: any) => action.payload;

const userSignOut = () => null;

export const user = createSlice({
  slice: 'user',
  initialState: null,
  reducers: {
    signIn: userSignIn,
    signOut: userSignOut,
  },
});
