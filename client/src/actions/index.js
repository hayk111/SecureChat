import * as types from '../constants/ActionTypes';
import * as common from '../constants/Common';

import axios from "axios/index";

export const signIn = user => ({
    type: types.SIGN_IN,
    user
});

export const signUp = user => ({
    type: types.SIGN_UP,
    user
});

export const signUpComplete = user => ({
    type: types.SIGN_UP_COMPLETE,
    user
});

export const signOut = user => ({
    type: types.SIGN_OUT,
    user
});

export function getCurrentUser() {
    return (dispatch) => {
        axios.post(`${common.BACK_URL}/currentUser`, {})
            .then(response => {
                dispatch({
                    type: types.GET_CURRENT_USER,
                    payload: response.data
                });
            })
            .catch(err => {
                console.error(err);
            });
    }
}