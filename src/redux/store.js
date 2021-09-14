import { combineReducers, createStore, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";

import userReducer from './reducers/user-reducer.js';
import registrationReducer from "./reducers/registration-reducer.js";

const reducers = combineReducers({
   registration: registrationReducer,
   userPage: userReducer,
});

const store = createStore(reducers, applyMiddleware(ThunkMiddleware));
document.store = store;


export default store;