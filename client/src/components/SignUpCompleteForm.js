import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {required, maxLength50} from '../constants/SignValidation';
import FileInput from './FileInput';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && ((error && <div className='requiredField requiredErr'>{label} {error}</div>)
            || (warning && <div className='requiredField requiredWarn'>{warning}</div>))}
    </div>
);

const SignUpCompleteForm = props => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit} className='completedForm'>
            <h3 className="welcomeTextCompleted">Please provide us some more info</h3>
            <Field
                name="first_name"
                component={renderField}
                validate={[ required, maxLength50 ]}
                type="text"
                label="Your first name"
            />

            <Field
                name="last_name"                 
                component={renderField}
                validate={[ required, maxLength50 ]}
                type="text"
                label="Your last name"
            />
            <hr />
            <h5 className="uploadProfilePicToComplete">Upload Profile pic</h5>

            <FileInput
                name="add_photo"
                classNameLabel="file-input-label"
                className="file-input"
                type="file"
                dropzone_options={{
                    multiple: false,
                    accept: 'image/*'
                }}
                >
                <span className="">Add Profile Picture</span>
            </FileInput>
            
            <br />
            <div class="profImgDiv">
                <img id="profilePicUpload" width="100%"
                height="100%" src='http://localhost:5000/images/default-avatar-boy.png' alt='Your image'/>
            </div>
                
            <div className='signUpCompleteFailed'></div>
            <input type="submit" value="Complete Sign Up" className='completeSignUp'/>
        </form>
    )
};

export default reduxForm({
    form: 'form-sign-up-complete' // a unique identifier for this form
})(SignUpCompleteForm);