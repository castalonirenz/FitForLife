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
        //   console.log(response.data.data.first_time)
            if(response.data.status !== "Invalid Credentials"){
                let sssss = "27-18-2021"
                let expDate = response.data.data.cust_expdate
                let expDateYear = moment(expDate).format('YYYY')
                let expDateDay = moment(expDate).format('DD')
                let expDateMonth = moment(expDate).format('MM')
                let todayYear = moment().format('YYYY')
                let todayDay = moment().format('DD')
                let todayMonth = moment().format('MM')
                let expTime = moment(expDate).format('hh:mm:ss a')
                let todayTime = moment().format('hh:mm:ss a')
                var a = moment([todayYear, todayMonth,todayDay, todayTime])
                var b = moment([expDateYear, expDateMonth,expDateDay, expTime])
                // var a = moment(expDate).format('LLLL')
                // var b = moment().format('LLLL')
                var c = moment().format('MM/DD/YYYY hh:mm:ss A')
                // console.log(moment.utc(moment(expTime, "DD/MM/YYYY HH:mm:ss").diff(moment(todayTime, "DD/MM/YYYY HH:mm:ss"))))
             
                let firstTime = response.data.data.first_time !== undefined ? response.data.data.first_time : 1
                let diff = a.diff(b, 'minutes')
               
          
                let add = diff
                let minutes = moment.duration(add, 'minutes')
                if(  minutes >= 180000){
                  
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