import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pick } from 'ramda';
import 'firebase/auth';
import { Store } from '@src/store';
import Login from '@containers/Login';
import Topics from '@containers/Topics';
import FirebaseContext from '@context/firebase';
import { user } from '@ducks';
import User from '@src/types/User';
import './App.css';

const { signIn, signOut } = user.actions;

const restrictUserProperties = (user: firebase.User) =>
  pick(['displayName', 'email', 'emailVerified', 'isAnonymous', 'phoneNumber', 'photoURL', 'uid'], user) as User;

const App: React.FC = () => {
  const firebaseApp = useContext(FirebaseContext);
  const dispatch = useDispatch();
  useEffect(
    () =>
      firebaseApp.auth().onAuthStateChanged((user: firebase.User | null) => {
        if (!!user) {
          dispatch(signIn(restrictUserProperties(user)));
        } else {
          dispatch(signOut());
        }
      }),
    [dispatch, firebaseApp],
  );
  const user = useSelector(({ user }: Store) => user);

  return user ? <Topics /> : <Login />;
};

export default App;
