import { connect } from 'react-redux';
import { signOut } from '../actions/index';
import { getCurrentUser } from '../actions/index';
import HomeComponent from '../components/Home';

const mapStateToProps = (state) => {
    console.log('State:::::::', state); // state
    return {
        currUser: state.sign.currUser
    };
}

const mapDispatchToProps = dispatch => ({
    signOut: (user) => {
        dispatch(signOut(user));
    },
    getCurrentUser: () => {
        dispatch(getCurrentUser());
    }
});

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);