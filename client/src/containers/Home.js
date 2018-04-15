import { connect } from 'react-redux';
import { signOut } from '../actions/index';
import HomeComponent from '../components/Home';

const mapDispatchToProps = dispatch => ({
    signOut: (user) => {
        dispatch(signOut(user));
    }
});

export const Home = connect(() => ({}), mapDispatchToProps)(HomeComponent);