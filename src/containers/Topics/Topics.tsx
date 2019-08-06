import React, { useCallback, useContext } from 'react';
import firebaseContext from 'Context/firebase';

const Topic: React.FC = () => {
  const firebaseApp = useContext(firebaseContext);
  const handleClickLogout = useCallback(() => {
    firebaseApp.auth().signOut();
  }, [firebaseApp]);

  return <button onClick={handleClickLogout}>Logout</button>;
};

export default Topic;
