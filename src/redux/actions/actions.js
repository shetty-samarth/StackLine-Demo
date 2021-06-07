import {ActionTypes} from '../constants/actionTypes'
export const fetchData = (data) =>{
    return{
        type: ActionTypes.FETCH_DATA,
        payload:data
    }
}