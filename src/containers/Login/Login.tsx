import React, { useContext } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { uiConfig } from '@config/firebaseConfig';
import FirebaseContext from '@context/firebase';

const Login: React.FC = () => {
  const firebaseApp = useContext(FirebaseContext);

  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()} />;
};

export default Login;
