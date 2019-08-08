import React, { useEffect } from 'react';
import { pick } from 'ramda';
import { useSelector, useDispatch } from 'react-redux';
import { Store } from 'Redux/store';
import { user } from 'Ducks';
import Login from 'Containers/Login';
import Topics from 'Containers/Topics';
import { firebaseApp } from 'Utils/firebase';

const { signIn, signOut } = user.actions;

const restrictUserProperties = (user: firebase.User) =>
  pick(['displayName', 'email', 'phoneNumber', 'photoURL', 'providerId', 'uid'], user) as firebase.UserInfo;

const selectUser = ({ user }: Store) => user;

const AuthGateway: React.FC = () => {
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
    [dispatch],
  );
  const user = useSelector(selectUser);

  return user ? <Topics /> : <Login />;
};

export default AuthGateway;
