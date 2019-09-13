import { ADD_EXERCISE } from "../actionType";

const initialState = {
    exercise: []
}

const ExerciseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXERCISE:
            return {
                ...state,
                exercise: action.data
            }
        default:
            return state;
    }
}

export default ExerciseReducer