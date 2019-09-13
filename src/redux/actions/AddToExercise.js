import { ADD_EXERCISE } from "../actionType";

export const addNewExercise = (data) => {
    return{
        type: ADD_EXERCISE,
        data: data
    }
}