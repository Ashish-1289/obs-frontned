import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./redux/rootReducer";
import { rootSaga } from "./redux/rootSagas";

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create Redux store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run sagas
sagaMiddleware.run(rootSaga);

export default store;