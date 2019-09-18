import { LOGIN, LOGOUT } from "../actionType";

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
            default:
                return state;
    }
}

export default AuthReducer