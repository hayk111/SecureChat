import * as types from '../constants/ActionTypes';
import axios from "axios/index";
import createHistory from "history/createBrowserHistory"

const history = createHistory();

const sign = (state = [], action) => {
    switch(action.type) {
        case types.SIGN_IN:
            console.log('sign in received state:', state, action);

            axios.post('http://localhost:5000/signin', {...action.user})
                .then(response => {
                    console.log('ok2:', response);
                    if(response.data.message) {
                        document.getElementsByClassName('signInFailed')[0].innerHTML = 'Incorrect username or password';
                        return state;
                    } else {
                        localStorage.setItem('currentUser', JSON.stringify(response.data));
                        console.log('hereeeeeeeeee');
                        window.location.href = '/home';
                        return state;
                    }
                })
                .catch(err => {
                    console.error(err);
                });

            return state;
        case types.SIGN_UP:
            console.log('sign UP received state:', state, action);
            
            const newState = state.concat([action.user]);
        
            axios.post('http://localhost:5000/signup', {...action.user})
                .then(response => {
                    console.log('ok response comes:', response);
                    if(response.data.hasOwnProperty('message')) {
                        switch(response.data.message) {
                            case 'Username taken':
                                document.getElementsByClassName('signUpFailed')[0].innerHTML = 'Username or email already taken';
                                break;
                        }
                    } else {
                        let allUserData = {...action.user};
                        allUserData.profilePic = 'http://localhost:5000/images/default-avatar-boy.png';

                        localStorage.setItem('currentSignUser', JSON.stringify(allUserData));
                        window.location.href = '/signUpLastStep';
                    }
                })
                .catch(err => {
                    console.error(err);
                });
            
            return newState;
        case types.SIGN_UP_COMPLETE:
            console.log('sign UP Completed received state:', state, action);
            let currUser = JSON.parse(localStorage.getItem('currentSignUser'));

            if(currUser) {
                console.log('currUser:', currUser, ', action:', action.user);
                currUser.first_name = action.user.first_name;
                currUser.last_name = action.user.last_name;

                axios.post('http://localhost:5000/signupCompleted', {...currUser})
                    .then(resp => {
                        console.log('signUp completedddddd4444:', resp.data.response);
                        if(resp.data.response === 'ok') {
                            window.location.href = '/home';
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    });
            }
            
            return state;
        case types.SIGN_OUT:
            console.log('sign out received state:', state);

            axios.post('http://localhost:5000/logout', {})
                .then(response => {
                    console.log('log out response:', response.data);
                    if(response.data.loggedOut) {
                        localStorage.removeItem('currentUser');
                        window.location.reload();
                    } else {
                        console.log('Some error...');
                    }
                    console.log('Loging out...');
                })
                .catch(err => {
                    console.error(err);
                });
            return state;
        case types.GET_CURRENT_USER: 
            console.log('curr dataaaaaaa', action);
            return {...state, currUser: action.payload.user};
        default:
            return state;
    }
}

export default sign;