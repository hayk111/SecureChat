import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

const chat = combineReducers({
    form: formReducer
});

export default chat;