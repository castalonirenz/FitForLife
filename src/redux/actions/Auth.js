import { LOGIN, LOGOUT } from "../actionType";
import Axios from 'axios'
import { apiUrl, localserver } from "../../utils/url";
export const Auth = (credentials) => {
    
    return dispatch => {
     return  Axios.post(apiUrl+"api/login",{
            username: credentials.username,
            password: credentials.password
        })
        .then((response => {
            
            if(response.data.status !== "Invalid Credentials"){
                dispatch(setInfo(response.data.data, response.data.logs))
                return 'success'
            }
        }))
        .catch(err => {
           
        })
    }
}

export const logout = () => {
    return{
        type: LOGOUT
    }
}

const setInfo = (data, logs) => {
    return{
        type: LOGIN,
        data: data,
        logs: logs
    }
}