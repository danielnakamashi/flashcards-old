import React, { useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { user } from '@ducks';
import firebaseContext from '@context/firebase';

const { signOut } = user.actions;

const Topic = () => {
  const firebaseApp = useContext(firebaseContext);
  const dispatch = useDispatch();
  const handleClickLogout = useCallback(() => {
    firebaseApp.auth().signOut();
    dispatch(signOut());
  }, [dispatch, firebaseApp]);
  return <button onClick={handleClickLogout}>Logout</button>;
};

export default Topic;
