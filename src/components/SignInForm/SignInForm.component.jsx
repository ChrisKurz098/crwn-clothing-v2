import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocFromAuth,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import { useEffect, useState } from "react";
import { getRedirectResult } from "firebase/auth";

import FormInput from '../../components/FormInput/FormInput.component';
import Button from "../../components/Button/Button.component";

import './signInForm.styles.scss';

const SignInForm = () => {

    // useEffect( () => {
    //     async function fetchRedirectResults() {
    //         const response = await getRedirectResult(auth);
    //         if (response) createUserDocFromAuth(response.user);
    //     };
    //     fetchRedirectResults();
    // }, [])
    const [formInput, setFormInput] = useState({ email: '', password: '' });
    const { email, password } = formInput;

    const singInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
       await createUserDocFromAuth(user);

    };

    const signInWithEmailAndPassword = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            console.log('Logged in: ', user.email);
        } catch (error) {
            console.log('Somthing When Wrong!', error);
        }

    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormInput(old => ({ ...old, [name]: value }));
    };

    console.log(email, password);

    return (
        < div className='sign-in-container' >
            <h1>I already have an account</h1>
            <span>Sign in with your email and password</span>

            <form onSubmit={signInWithEmailAndPassword}>
                <FormInput label='Email' required value={email} name='email' onChange={handleChange} />
                <FormInput label='Password' required value={password} name='password' onChange={handleChange} />
                <div className="buttons-container">
                    <Button type='submit'>Sign In</Button>
                    <Button buttonType='google' onClick={singInWithGoogle}> Google Sign In</Button>
                </div>
            </form>

        </div >
    );
}

export default SignInForm