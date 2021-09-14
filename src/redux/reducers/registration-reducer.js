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
      dispatch(setSuccessMessageAC(`User [${response.name}] with id [${response.id}] was created successfully!`))
      dispatch(toggleIsSubmittingAC(false));
   }
}

export const resetSuccessMessageThunkCreater = () => {
   return (dispatch) => {
      dispatch(setSuccessMessageAC(null));
   }
}


export default registrationReducer;