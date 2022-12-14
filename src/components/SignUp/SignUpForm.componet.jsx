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

    const handleChange = (event) => {
        const [name, value] = event.target;
        setFormInput(old => ({...old, [name]: value}));
    };

    console.log(formInput);

    return (
        <div>
            <h1>Sign up with an email and password</h1>
            <form onChange={handleChange} onSubmit={() => { }}>
                <label htmlFor="displayName">Display Name</label>
                <input required type={'text'} name="displayName" value={displayName} />

                <label htmlFor="email">Email</label>
                <input required type={'email'} name="email" value={email} />

                <label htmlFor="password">Password</label>
                <input required type={'password'} name="password" value={password} />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input required type={'password'} name="confirmPassword" value={confirmPassword} />

                <button type="submit">Sign Up</button>

            </form>
        </div>
    );
};

export default SignUpForm;