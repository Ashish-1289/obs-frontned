import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN_REQUEST } from "../constants";
import { loginFailure, loginSuccess } from "./loginActions";
import loginapi from '../../api/api';


function* handleLogin(action){
    try{
        const reposne = yield call(loginapi , action.payload);
        yield put(loginSuccess(reposne));
    }
    catch(error){
        yield put(loginFailure(error.message));
    }
}

export function* watchLoginSaga(){
    yield takeLatest(LOGIN_REQUEST, handleLogin);
}