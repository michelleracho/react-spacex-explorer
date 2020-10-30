import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCii22ea36dw8Zq-G6jLyZ2GM_WJJtIjRw',
  authDomain: 'spacex-explorer-a8dfc.firebaseapp.com',
  databaseURL: 'https://spacex-explorer-a8dfc.firebaseio.com',
  projectId: 'spacex-explorer-a8dfc',
  storageBucket: 'spacex-explorer-a8dfc.appspot.com',
  messagingSenderId: '785867604503',
  appId: '1:785867604503:web:21ade1fdff9c3153f89252'
};

firebase.initializeApp(firebaseConfig); // activate firebase project

// local variables
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// auth functions
function login() {
  return auth.signInWithPopup(provider);
}

function logout() {
  return auth.signOut();
}

// export auth functions and observer
export { login, logout, auth };
