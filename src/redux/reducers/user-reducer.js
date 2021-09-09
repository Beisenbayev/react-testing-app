import serverAPI from '../../api/api.js';

const userReducerId = 'sign-up/userReducer';
const SIGN_UP = `${userReducerId}/SIGN_UP`;
const SET_USER_DATA = `${userReducerId}/SET_USER_DATA`;

const initialState = {
   data: {},
   isFetching: true,
}

const userReducer = (state = initialState, action) => {
   switch (action) {
      case SET_USER_DATA: {
         return { ...state, data: action.data };
      }
      default: return state;
   }
}

const setUserDataAC = (data) => ({type: SET_USER_DATA, data});

export const signUpThunkCreater = (data) => {
   return async (dispatch) => {
      const response = await serverAPI.signUpRequest(data);
      console.log(response);
   }
}

export const setUserDataThunkCreater = (username) => {
   return async (dispatch) => {
      const response = await serverAPI.getUserDataRequest(username);
      console.log(response);
   }
}


export default userReducer;