import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import sign from './sign';

const chat = combineReducers({
    form: formReducer,
    sign
});

export default chat;