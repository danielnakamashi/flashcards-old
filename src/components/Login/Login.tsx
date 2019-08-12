import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { uiConfig } from 'Config/firebaseConfig';
import { firebaseApp } from 'Utils/firebase';

const Login: React.FC = () => <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()} />;

export default Login;
