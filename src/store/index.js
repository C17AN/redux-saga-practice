import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../sagas/requestSaga";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;
