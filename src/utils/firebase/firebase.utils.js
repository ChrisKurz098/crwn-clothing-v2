import { initializeApp} from 'firebase/app';
import {getAuth, 
    signInWithRedirtect, 
    signInWithPopup, 
    GoogleAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKCPo2qj3pLKOvYNKw_XDkjnMCd5LVwO8",
    authDomain: "crownclothing-db-f845b.firebaseapp.com",
    projectId: "crownclothing-db-f845b",
    storageBucket: "crownclothing-db-f845b.appspot.com",
    messagingSenderId: "875136697425",
    appId: "1:875136697425:web:1277962a2e508b97096470"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameters({
    prompt: 'select_account'
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider); 