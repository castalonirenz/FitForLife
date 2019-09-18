import { LOGIN, LOGOUT } from "../actionType";

const initialState = {
    credentials: []
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                credentials: action.data
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