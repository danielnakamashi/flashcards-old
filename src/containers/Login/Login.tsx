import React, { useEffect } from 'react';
import { pick } from 'ramda';
import { useDispatch } from 'react-redux';
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { firebaseConfig, uiConfig } from '@config/firebaseConfig';
import { user } from '@ducks';
import User from '@src/types/User';

firebase.initializeApp(firebaseConfig);

const { signIn, signOut } = user.actions;

const restrictUserProperties = (user: firebase.User) =>
  pick(
    ['displayName', 'email', 'emailVerified', 'isAnonymous', 'phoneNumber', 'photoURL', 'providerData', 'uid'],
    user,
  ) as User;

const Login: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(
    () =>
      firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
        if (!!user) {
          dispatch(signIn(restrictUserProperties(user)));
        } else {
          dispatch(signOut());
        }
      }),
    [dispatch],
  );

  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />;
};

export default Login;
