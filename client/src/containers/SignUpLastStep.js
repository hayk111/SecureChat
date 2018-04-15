import { connect } from 'react-redux';
import { signUpComplete } from '../actions/index';
import SignUpLastStepComponent from '../components/SignUpLastStep';

const mapDispatchToProps = dispatch => ({
    signUpComplete: (user) => {
        dispatch(signUpComplete(user));
    }
});

export const SignUpLastStep = connect(() => ({}), mapDispatchToProps)(SignUpLastStepComponent);