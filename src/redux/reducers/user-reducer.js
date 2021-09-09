import serverAPI from '../../api/api.js';

const userReducerId = 'sign-up/userReducer';
const SET_USER_DATA = `${userReducerId}/SET_USER_DATA`;

const initialState = {
   data: {},
   isFetching: true,
}

const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA: {
         return { ...state, data: action.data };
      }
      default: return state;
   }
}

const setUserDataAC = (data) => ({type: SET_USER_DATA, data});

export const setUserDataThunkCreater = (username) => {
   return async (dispatch) => {
      const response = await serverAPI.getUserDataRequest(username);
   }
}


export default userReducer;