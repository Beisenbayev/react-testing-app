import serverAPI from '../../api/api.js';

const registrationReducerId = 'sign-up/registrationReducer';
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

const setSuccessMessageAC = (successMessage) => ({ type: SET_SUCCESS_MESSAGE, successMessage });
const toggleIsSubmittingAC = (isSubmitting) => ({ type: TOGGLE_IS_SUBMITTING, isSubmitting });

export const signUpThunkCreater = (data) => {
   return async (dispatch) => {
      dispatch(toggleIsSubmittingAC(true));
      const response = await serverAPI.signUpRequest(data);
      dispatch(toggleIsSubmittingAC(false));
      if (response.code === 200) {
         dispatch(setSuccessMessageAC('Registration completed successfully'));
      } else {
         dispatch(setSuccessMessageAC(response.message));
      }
   }
}


export default registrationReducer;