import firebase from 'firebase/app';
import { firebaseConfig } from 'Config/firebaseConfig';

export const firebaseApp = firebase.initializeApp(firebaseConfig);
