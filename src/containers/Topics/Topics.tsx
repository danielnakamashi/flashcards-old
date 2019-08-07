import React, { useCallback } from 'react';
import { firebaseApp } from 'Context/firebase';

const Topic: React.FC = () => {
  const handleClickLogout = useCallback(() => {
    firebaseApp.auth().signOut();
  }, []);

  return <button onClick={handleClickLogout}>Logout</button>;
};

export default Topic;
