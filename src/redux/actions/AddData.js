import { ADD_EXERCISE, ADD_NUTRITION } from "../actionType";

export const addNewExercise = (data) => {
    return{
        type: ADD_EXERCISE,
        data: data
    }
}

export const addNewNutrition = (data) => {
    
    return{
        type: ADD_NUTRITION,
        data:data
    }
}