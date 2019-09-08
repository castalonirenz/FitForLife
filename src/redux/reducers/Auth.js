import { LOGIN } from "../actionType";

const initialState = {
    credentials: []
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                credentials: action.credentials
            }
            default:
                return state;
    }
}

export default AuthReducer