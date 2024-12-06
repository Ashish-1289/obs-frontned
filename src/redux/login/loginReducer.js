import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST } from "../constants";

const initialState = {
    loading: false,
    user: null,
    error: null,
    
}

const loginReducer = (state = initialState, action) =>{
    switch (action.type){
        case LOGIN_REQUEST:
            return{
                ...state,
                loading: true,
                error: null,
            };
        case LOGIN_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.error,
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                loading: false,
                user: action.response,
            }
        default:
            return state;
    }
};

export default loginReducer;
