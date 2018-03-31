import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {required, maxLength15} from '../constants/SignValidation';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && ((error && <div className='requiredField requiredErr'>{label} {error}</div>)
            || (warning && <div className='requiredField requiredWarn'>{warning}</div>))}
    </div>
);

const SignInForm = props => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <span className="fontawesome-user"></span>
                <div>
                    <Field
                        name="username"
                        component={renderField}
                        validate={[ required, maxLength15 ]}
                        type="text"
                        label="Username"
                    />
                </div>
            </div>
            <div>
                <span className="fontawesome-lock"></span>
                <div>
                    <Field
                        name="password"
                        component={renderField}
                        validate={[ required, maxLength15 ]}
                        type="password"
                        label="Password"
                    />
                </div>
            </div>
            <input type="submit" value="Login" className='submitSignIn'/>
        </form>
    )
};

export default reduxForm({
    form: 'form-login' // a unique identifier for this form
})(SignInForm);