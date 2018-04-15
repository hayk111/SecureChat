import { connect } from 'react-redux';
import { signUp} from '../actions/index';
import SignUpComponent from '../components/SignUp';

const mapDispatchToProps = dispatch => ({
    signUp: (user) => {
        dispatch(signUp(user));
    }
});

const mapStateToProps = (state, ownProps) => {
    console.log('Statte::', state); // state
    console.log(ownProps); // ownProps
}

export const SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);