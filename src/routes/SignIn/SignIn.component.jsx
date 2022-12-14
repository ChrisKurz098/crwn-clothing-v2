import { auth, signInWithGooglePopup,signInWithGoogleRedirect, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/SignUp/SignUpForm.componet";
const SignIn = () => {
    useEffect( () => {
        async function fetchRedirectResults() {
            const response = await getRedirectResult(auth);
            if (response) createUserDocFromAuth(response.user);
        };
        fetchRedirectResults();
    }, [])

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
       const userDocRef =  await createUserDocFromAuth(user);
    
    };

    return (
        <>
        <div>
            <h1>SIGN IN PAGE.....</h1>
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
        </div>
        <SignUpForm/>
        </>
    )
};

export default SignIn;