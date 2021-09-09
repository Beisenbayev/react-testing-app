import { applyMiddleware, combineReducers, createStore } from "redux";
import ThunkMiddleware from "redux-thunk";

import { userReducer } from './reducers/user-reducer.js';

const reducers = combineReducers({
   userPage: userReducer,
});

const store = createStore(reducers, applyMiddleware(ThunkMiddleware));


export default store;

