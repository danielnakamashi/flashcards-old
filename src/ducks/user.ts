import { createSlice } from 'redux-starter-kit';

const userSignIn = (state: firebase.UserInfo | null, action: any) => action.payload;

const userSignOut = () => null;

export const user = createSlice({
  slice: 'user',
  initialState: null,
  reducers: {
    signIn: userSignIn,
    signOut: userSignOut,
  },
});
