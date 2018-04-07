import * as types from '../constants/ActionTypes';

export const signIn = user => ({
    type: types.SIGN_IN,
    user
});