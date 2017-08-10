import firebase from 'firebase';

const config = {
  //add firebase config info here.
};

export const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
