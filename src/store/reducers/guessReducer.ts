import { Action } from "redux";
import { GuessAction, Guess, GuessNumber, initalState } from "../../types/guessTypes";
import * as actionTypes from "../actions/guessActionTypes"


const guessReducer = (state : Guess = initalState, action:GuessAction)  => {
    switch (action.type) {
        case actionTypes.ADD_NUMBER :
            const newNumber : GuessNumber = {
                guess: action.guessNumber
            }
            return{
                ...state,
                guessNumber : state.guessNumber.concat(newNumber)
            }
        case actionTypes.CLEAR_NUMBER : 
            const updateNumber : GuessNumber[] = state.guessNumber.slice(0, -1)

            return{
                ...state,
                guessNumber: updateNumber
            }
    }
    return state
}
export default guessReducer;