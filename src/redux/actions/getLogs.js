import { GET_LOGS } from "../actionType";
import axios from "axios";
import { apiUrl } from "../../utils/url";
export const getLogs = (id) => {
        return dispatch => {
         return   axios.post(apiUrl + "api/showLogs",{
                customer_id: id
            })
            .then((logs => {
                console.log(logs.data.status)
                dispatch(setLogs(logs.data.status))
                return false
            }))
            .catch(err => {
                alert('Please check your internet connection')
                return false
            })
        }
}
 const setLogs = (logs) => {
     return{
         type: GET_LOGS,
         logs: logs
     }
 }