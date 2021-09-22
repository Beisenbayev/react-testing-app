import { call, put } from 'redux-saga/effects';
import serverAPI from '../../api/api.js';

const registrationReducerId = 'sign-up/registrationReducer';
export const SIGN_UP = `${registrationReducerId}/SIGN_UP`;
export const CLEAR_SUCCESS_MESSAGE = `${registrationReducerId}/CLEAR_SUCCESS_MESSAGE`;
const SET_SUCCESS_MESSAGE = `${registrationReducerId}/SET_SUCCESS_MESSAGE`;
const TOGGLE_IS_SUBMITTING = `${registrationReducerId}/TOGGLE_IS_SUBMITTING`;

const initialState = {
   successMessage: null,
   isSubmitting: false,
}

const registrationReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_SUCCESS_MESSAGE: {
         return { ...state, successMessage: action.successMessage };
      }
      case TOGGLE_IS_SUBMITTING: {
         return { ...state, isSubmitting: action.isSubmitting };
      }
      default: return state;
   }
}

export const signUpAC = (data) => ({ type: SIGN_UP, data });
export const clearSuccessMessageAC = () => ({ type: CLEAR_SUCCESS_MESSAGE });
const setSuccessMessageAC = (successMessage) => ({ type: SET_SUCCESS_MESSAGE, successMessage });
const toggleIsSubmittingAC = (isSubmitting) => ({ type: TOGGLE_IS_SUBMITTING, isSubmitting });

export function* handleSignUp(action) {
   yield put(toggleIsSubmittingAC(true));
   const response = yield call(serverAPI.signUpRequest, action.data);
   yield put(setSuccessMessageAC(`User [${response.name}] with id [${response.id}] was created successfully!`));
   yield put(toggleIsSubmittingAC(false));
}

export function* handleClearSuccessMessage(action) {
   yield put(setSuccessMessageAC(null));
}


export default registrationReducer;