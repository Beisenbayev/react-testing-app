import { call, put } from 'redux-saga/effects';
import serverAPI from '../../api/api.js';

const userReducerId = 'sign-up/userReducer';
export const GET_USER_DATA = `${userReducerId}/GET_USER_DATA`;
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

export const getUserDataAC = (userId) => ({ type: GET_USER_DATA, userId });
export const setUserDataAC = (data) => ({ type: SET_USER_DATA, data });
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export function* handleGetUserData(action) {
   yield put(toggleIsFetchingAC(true));
   const response = yield call(serverAPI.getUserDataRequest, action.userId);
   yield put(setUserDataAC(response.data));
   yield put(toggleIsFetchingAC(false));
}


export default userReducer;