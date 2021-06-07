import {ActionTypes} from '../constants/actionTypes'
import data from '../../data/stackline_frontend_assessment_data_2021.json'

const initialState = data[0]
export const reducer = (state=initialState, {type,payload})=>{
    switch(type){
        case ActionTypes.FETCH_DATA:
            return state;
        default:
            return state;
    }
}