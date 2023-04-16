import { GuessAction, guess, guessNumber } from "../../types/guessTypes";
import * as actionTypes from '../actions/guessActionTypes';


export const addGuessNumber = (guessNumber:guessNumber) => {
    
    const action: GuessAction = {
        type: actionTypes.ADD_NUMBER,
         guessNumber
    }
    
    
    
    return action
}

export const ClearGuessNumber = (guessNumbe: guess) => {
    const action: GuessAction = {
        type: actionTypes.CLEAR_NUMBER,
        guessNumbe,
    }
    return action
}