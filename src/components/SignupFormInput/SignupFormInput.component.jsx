
import './SignupFormInput.styles.scss'

const SignupFormInput = ({ label, ...otherProps }) => {
 
    return (
        <div className="group">
             <input className="form-input" required {...otherProps}/>
            { label && (
            <label className={`${otherProps.value.length ? 'shrink' : '' } form-input-label`} >{label}</label>
            )}
           
        </div>

    );
};

export default SignupFormInput;