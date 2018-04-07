import * as types from '../constants/ActionTypes';
import axios from "axios/index";

const sign = (state = [], action) => {
    switch(action.type) {
        case types.SIGN_IN:
            console.log('sign in received state:', state, action);

            axios.post('http://localhost:5000/signin', {...action.user})
                .then(response => {
                    console.log('ok2:', response);
                    if(response.data.message) {
                        document.getElementsByClassName('signInFailed')[0].innerHTML = 'Incorrect username or password';
                    } else {
                        window.location.href = '/home';
                    }
                })
                .catch(err => {
                    console.error(err);
                });

            return state;
        case types.SIGN_OUT:
            console.log('sign out received state:', state);
            return state;
        default:
            return state;
    }
}

export default sign;