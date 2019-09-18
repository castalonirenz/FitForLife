import { LOGIN, LOGOUT } from "../actionType";
import Axios from 'axios'
import { apiUrl, localserver } from "../../utils/url";
export const Auth = (credentials) => {
    console.log(credentials, "what is this", localserver)
    return dispatch => {
     return  Axios.post(apiUrl+"api/login",{
            username: credentials.username,
            password: credentials.password
        })
        .then((response => {
            console.log(response.data, "here")
            if(response.data.status !== "Invalid Credentials"){
                dispatch(setInfo(response.data.data))
                return 'success'
            }
        }))
        .catch(err => {
           console.log(err)
        })
    }
}

export const logout = () => {
    return{
        type: LOGOUT
    }
}

const setInfo = (data) => {
    return{
        type: LOGIN,
        data: data
    }
}