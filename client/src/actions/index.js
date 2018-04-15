import * as types from '../constants/ActionTypes';

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