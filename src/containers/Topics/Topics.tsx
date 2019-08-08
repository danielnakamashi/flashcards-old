import React, { useCallback } from 'react';
import { firebaseApp } from 'Utils/firebase';

const Topic: React.FC = () => {
  const handleClickLogout = useCallback(() => {
    firebaseApp.auth().signOut();
  }, []);

  return <button onClick={handleClickLogout}>Logout</button>;
};

export default Topic;
