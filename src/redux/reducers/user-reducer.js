import serverAPI from '../../api/api.js';

const userReducerId = 'sign-up/userReducer';
const SET_USER_DATA = `${userReducerId}/SET_USER_DATA`;
const TOGGLE_IS_FETCHING = `${userReducerId}/TOGGLE_IS_FETCHING`;

const initialState = {
   data: {},
   isFetching: true,
}

const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA: {
         return { ...state, data: action.data };
      }
      case TOGGLE_IS_FETCHING: {
         return { ...state, isFetching: action.isFetching };
      }
      default: return state;
   }
}

const setUserDataAC = (data) => ({ type: SET_USER_DATA, data });
const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const setUserDataThunkCreater = (userId) => {
   return async (dispatch) => {
      dispatch(toggleIsFetchingAC(true));
      const response = await serverAPI.getUserDataRequest(userId);
      dispatch(setUserDataAC(response.data));
      dispatch(toggleIsFetchingAC(false));
   }
}


export default userReducer;