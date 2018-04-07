import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {required, maxLength15, minValue1, number, aol, minValue4, email, tooOld} from '../constants/SignValidation';

const renderField = ({ input, label, type, placeholder, meta: { touched, error, warning } }) => (
    <div>
        <input {...input} placeholder={placeholder} type={type}/>
        {touched && ((error && <div className='requiredField requiredErr'>{label} {error}</div>)
            || (warning && <div className='requiredField requiredWarn'>{warning}</div>))}
    </div>
);

const SignUpForm = props => {
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
                        placeholder="Enter your username"
                    />
                </div>
            </div>
            <div>
                <span className="fontawesome-envelope"></span>
                <div>
                    <Field
                        name="email"
                        component={renderField}
                        validate={[ required, email, aol ]}
                        type="text"
                        label="Email"
                        placeholder="Enter your email address"
                    />
                </div>
            </div>
            <div>
                <span className="fontawesome-phone"></span>
                <div>
                    <Field
                        name="phone"
                        component={renderField}
                        validate={[ required, minValue4 ]}
                        type="text"
                        label="Phone"
                        placeholder="Enter your phone number"
                    />
                </div>
            </div>
            <div>
                <span className="fontawesome-calendar"></span>
                <div>
                    <Field
                        name="age"
                        component={renderField}
                        validate={[ required, tooOld, minValue1, number ]}
                        type="text"
                        label="Age"
                        placeholder="How old are you?"
                    />
                </div>
            </div>
            <div>
                <span className="fontawesome-lock"></span>
                <div>
                    <Field
                        name="password"
                        component={renderField}
                        validate={[ required, maxLength15, minValue4 ]}
                        type="password"
                        label="Password"
                        placeholder="Your password"
                    />
                </div>
            </div>
            <div>
                <span className="fontawesome-lock"></span>
                <div>
                    <Field
                        name="repPassword"
                        component={renderField}
                        validate={[ required, maxLength15, minValue4 ]}
                        type="password"
                        label="Value"
                        placeholder="Repeat password"
                    />
                </div>
            </div>
            <div className='signUpFailed'></div>
            <input type="submit" value="Sign me up!" className='submitSignUp'/>
        </form>
    )
};

export default reduxForm({
    form: 'form-signup' // a unique identifier for this form
})(SignUpForm);