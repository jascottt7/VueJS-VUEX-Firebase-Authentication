import firebase from 'firebase';

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
};

export const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
