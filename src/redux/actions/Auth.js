import { LOGIN, LOGOUT } from "../actionType";
import Axios from 'axios'
import { apiUrl, localserver } from "../../utils/url";
import moment from 'moment'
export const Auth = (credentials) => {
    
    return dispatch => {
     return  Axios.post(apiUrl+"api/login",{
            username: credentials.username,
            password: credentials.password
        })
        .then((response => {
          
            if(response.data.status !== "Invalid Credentials"){
                let sssss = "27-18-2021"
                let expDate = response.data.data.cust_expdate
                let expDateYear = moment(expDate).format('YYYY')
                let expDateDay = moment(expDate).format('DD')
                let expDateMonth = moment(expDate).format('MM')
                let todayYear = moment().format('YYYY')
                let todayDay = moment().format('DD')
                let todayMonth = moment().format('MM')
                var a = moment([todayYear, todayMonth,todayDay])
                var b = moment([expDateYear, expDateMonth,expDateDay])
                var c = moment(['2019', "09", "18"])
                // console.log(a.diff(c, 'years', true))

                let diff = b.diff(a, 'years', true)
                if(  diff <= 0){
                  
                    return 'expired'
                }
                else{
                    dispatch(setInfo(response.data.data, response.data.logs))
                    return 'success'
                }
                
            }
            else{
                return 'fail'
            }
            
        }))
        .catch(err => {
           alert(err)
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