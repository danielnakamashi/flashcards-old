import { createContext } from 'react';
import firebase from 'firebase/app';
import { firebaseConfig } from 'Config/firebaseConfig';

export const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseContext = createContext(firebaseApp);

export default firebaseContext;
