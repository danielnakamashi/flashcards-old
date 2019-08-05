import React, { useEffect, useContext } from 'react';
import { pick } from 'ramda';
import { useDispatch } from 'react-redux';
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { uiConfig } from '@config/firebaseConfig';
import { user } from '@ducks';
import User from '@src/types/User';
import FirebaseContext from '@context/firebase';

// firebase.initializeApp(firebaseConfig);
// const firebaseAuth = firebase.auth();

const { signIn, signOut } = user.actions;

const restrictUserProperties = (user: firebase.User) =>
  pick(['displayName', 'email', 'emailVerified', 'isAnonymous', 'phoneNumber', 'photoURL', 'uid'], user) as User;

const Login: React.FC = () => {
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

  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()} />;
};

export default Login;
