import { takeEvery } from 'redux-saga/effects';

import { GET_USER_DATA, handleGetUserData } from '../reducers/user-reducer.js';
import { SIGN_UP, handleSignUp } from '../reducers/registration-reducer.js';
import { CLEAR_SUCCESS_MESSAGE, handleClearSuccessMessage } from '../reducers/registration-reducer.js';

function* watcherSaga() {
   yield takeEvery(GET_USER_DATA, handleGetUserData);
   yield takeEvery(SIGN_UP, handleSignUp);
   yield takeEvery(CLEAR_SUCCESS_MESSAGE, handleClearSuccessMessage);
}


export default watcherSaga;