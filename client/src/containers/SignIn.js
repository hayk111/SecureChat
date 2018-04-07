import { connect } from 'react-redux';
import { signIn } from '../actions/index';
import SignInComponent from '../components/SignIn';

const mapDispatchToProps = dispatch => ({
    signIn: (user) => {
        dispatch(signIn(user));
    }
});

export const SignIn = connect(() => ({}), mapDispatchToProps)(SignInComponent);