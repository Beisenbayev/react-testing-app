import serverAPI from '../../api/api.js';

const userReducerId = 'sign-up/userReducer';
const SET_USER_DATA = `${userReducerId}/SET_USER_DATA`;
const SET_ERROR_MESSAGE = `${userReducerId}/SET_ERROR_MESSAGE`;

const initialState = {
   data: undefined,
   errorMessage: null,
   isFetching: true,
}

const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA: {
         return { ...state, data: action.data };
      }
      case SET_ERROR_MESSAGE: {
         return { ...state, errorMessage: action.errorMessage };
      }
      default: return state;
   }
}

const setUserDataAC = (data) => ({ type: SET_USER_DATA, data });
const setErrorMessageAC = (errorMessage) => ({ type: SET_ERROR_MESSAGE, errorMessage });

export const setUserDataThunkCreater = (username) => {
   return async (dispatch) => {
      const response = await serverAPI.getUserDataRequest(username);
      if (response.code === 200) {
         dispatch(setUserDataAC(response.data));
      } else {
         dispatch(setErrorMessageAC(response.message));
      }
   }
}


export default userReducer;