import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD_gt3dT0MPfUPyGvIbDD28tB5vASdYQ44",
  authDomain: "clone-142.firebaseapp.com",
  projectId: "clone-142",
  storageBucket: "clone-142.appspot.com",
  messagingSenderId: "273183273760",
  appId: "1:273183273760:web:cbd7a3ce337f68e305dd45"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };