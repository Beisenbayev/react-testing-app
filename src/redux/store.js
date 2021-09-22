import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import ThunkMiddleware from "redux-thunk";
import watcherSaga from "./sagas/rootSaga.js";

import userReducer from './reducers/user-reducer.js';
import registrationReducer from "./reducers/registration-reducer.js";

const reducers = combineReducers({
   registration: registrationReducer,
   userPage: userReducer,
});

const SagaMiddleware = createSagaMiddleware();
const middlewares = [SagaMiddleware, ThunkMiddleware];

const store = createStore(reducers, applyMiddleware(...middlewares));
SagaMiddleware.run(watcherSaga);

document.store = store;
export default store;