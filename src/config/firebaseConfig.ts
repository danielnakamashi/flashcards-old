import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';

export const firebaseConfig = {
  apiKey: 'AIzaSyC0pLd2ws6ML3B9cFFsSx_2BfJiLz9h_MY',
  authDomain: 'flashcards-43ee5.firebaseapp.com',
  databaseURL: 'https://flashcards-43ee5.firebaseio.com',
  projectId: 'flashcards-43ee5',
  storageBucket: '',
  messagingSenderId: '476257471920',
  appId: '1:476257471920:web:f7e093bc652a2738',
};

export const uiConfig: firebaseui.auth.Config = {
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      authMethod: 'https://accounts.google.com',
      clientId: '',
    },
  ],
};
