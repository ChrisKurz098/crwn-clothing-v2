import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import { useState } from "react";

const defaultFormInput = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formInput, setFormInput] = useState(defaultFormInput);
    const { displayName, email, password, confirmPassword } = formInput;

    const successfullSignUp = () => {
        setFormInput(defaultFormInput);
        alert('SignUp success!')
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormInput(old => ({ ...old, [name]: value }));
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        };
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocFromAuth(user, { displayName });

            successfullSignUp();

        } catch (error) {
          if (error.code === 'auth/email-already-in-use') alert('This email already exists as a user');
          if (error.code === 'auth/weak-password') alert('Password must be at least 6 characters long');
          console.log(error);
        };
      

    }

    console.log(formInput);

    return (
        <div>
            <h1>Sign up with an email and password</h1>
            <form onChange={handleChange} onSubmit={submitHandler}>
                <label htmlFor="displayName">Display Name</label>
                <input required type={'text'} name="displayName" defaultValue={displayName} />

                <label htmlFor="email">Email</label>
                <input required type={'email'} name="email" defaultValue={email} />

                <label htmlFor="password">Password</label>
                <input required type={'password'} name="password" defaultValue={password} />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input required type={'password'} name="confirmPassword" defaultValue={confirmPassword} />

                <button type="submit">Sign Up</button>

            </form>
        </div>
    );
};

export default SignUpForm;