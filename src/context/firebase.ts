import { createContext } from 'react';
import firebase from 'firebase/app';
import { firebaseConfig } from '@config/firebaseConfig';

export const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseContext = createContext(firebaseApp);

export default firebaseContext;
