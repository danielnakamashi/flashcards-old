import { useEffect } from 'react';
import { pick } from 'ramda';
import { Store } from 'Redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { firebaseApp } from 'Utils/firebase';
import { user } from 'Ducks';

const { signIn, signOut } = user.actions;

const restrictUserProperties = (user: firebase.User) =>
  pick(['displayName', 'email', 'phoneNumber', 'photoURL', 'providerId', 'uid'], user) as firebase.UserInfo;

const selectUser = ({ user }: Store) => user;

const signOutAction = () => {
  firebaseApp.auth().signOut();
};

const useUser = () => {
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

  return {
    user,
    signOut: signOutAction,
  };
};

export default useUser;
