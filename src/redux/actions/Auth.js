import { LOGIN, LOGOUT } from "../actionType";
import Axios from 'axios'
import { apiUrl, localserver } from "../../utils/url";
import moment, { duration } from 'moment'
export const Auth = (credentials) => {
    
    return dispatch => {
     return  Axios.post(apiUrl+"api/login",{
            username: credentials.username,
            password: credentials.password
        })
        .then((response => {
            if(response.data.status !== "Invalid Credentials"){
                console.log(response.data, "--> checking]")
                let expDate = response.data.data.cust_expdate
              
                let firstTime = response.data.data.first_time !== undefined ? response.data.data.first_time : 1
                // let diff = expTime.diff(todayTime, 'minutes')
                let momomentExpDate = moment(expDate)
                let today = moment()
                console.log(moment.duration(today.diff(momomentExpDate)).get('minutes'), "--> where?")
                let expDurationMinutes = moment.duration(today.diff(momomentExpDate)).get('minutes')
                console.log(expDurationMinutes)
                console.log(momomentExpDate.isSameOrAfter(today))
                if (!momomentExpDate.isSameOrAfter(today)){
                  
                    return 'expired'
                }
                // else if(response.data.data.first_time === 0){
                //     return 'change'
                // }
                else if (firstTime == 0){
                         dispatch(setInfo(response.data.data, response.data.logs))
                         return 'change'
                 
       
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