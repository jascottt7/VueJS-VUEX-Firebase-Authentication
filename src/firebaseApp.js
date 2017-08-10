import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD9GCkcSIYTjYqz2fvZ9fm9vzmfi1hkYW0',
  authDomain: 'drillsite-2bb2c.firebaseapp.com',
  databaseURL: 'https://drillsite-2bb2c.firebaseio.com',
  projectId: 'drillsite-2bb2c',
  storageBucket: 'drillsite-2bb2c.appspot.com',
  messagingSenderId: '517395075606',
};

export const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
