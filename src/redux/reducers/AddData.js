import { ADD_EXERCISE, ADD_NUTRITION } from "../actionType";

const initialState = {
    exercise: [],
    nutrition: []
}

const DataReducer = (state = initialState, action) => {
    console.log('exercise')
    switch (action.type) {
 
        case ADD_EXERCISE:
            return {
                ...state,
                exercise: action.data
            }
        case ADD_NUTRITION:
            return{
                ...state,
                nutrition: action.data
            }
        default:
            return state;
    }
}

export default DataReducer