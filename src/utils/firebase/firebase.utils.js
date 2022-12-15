import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword 
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
}
    from 'firebase/firestore';

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
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
export const signInWithUserData = (auth, email, password) => signInWithEmailAndPassword (auth, email, password );

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInfo) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid); //database, collection, unique id

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    if (userSnapshot.exists()) {
        return userDocRef;
    } else {
        const { displayName, email } = userAuth;
        const createdAt = new Date();



        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            });
        } catch (error) {
            console.log('Error creating user');
            console.log(error);
        }
    };

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
};