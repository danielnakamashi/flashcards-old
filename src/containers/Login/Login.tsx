import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { uiConfig } from 'Config/firebaseConfig';
import { firebaseApp } from 'Context/firebase';

const Login: React.FC = () => {
  return (
    <div data-testid="firebase-login">
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()} />
    </div>
  );
};

export default Login;
