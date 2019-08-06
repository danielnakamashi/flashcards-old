import React, { useContext } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { uiConfig } from 'Config/firebaseConfig';
import FirebaseContext from 'Context/firebase';

const Login: React.FC = () => {
  const firebaseApp = useContext(FirebaseContext);

  return (
    <div data-testid="firebase-login">
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()} />
    </div>
  );
};

export default Login;
