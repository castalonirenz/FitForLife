import { LOGIN, LOGOUT, GET_LOGS } from "../actionType";

const initialState = {
    credentials: [],
    logs: []
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                credentials: action.data,
                logs: action.logs
            }
        case LOGOUT:
            return{
                ...state,
                credentials: []
            }
        case GET_LOGS:
            return{
                ...state,
                logs: action.logs
            }
            default:
                return state;
    }
}

export default AuthReducer