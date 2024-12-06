import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants";

export const loginRequest = (payload) =>({
    type: LOGIN_REQUEST,
    payload,
})
export const loginSuccess = (response) =>({
    type: LOGIN_SUCCESS,
    response
})

export const loginFailure = (error) =>({
    type: LOGIN_FAILURE,
    error
})

