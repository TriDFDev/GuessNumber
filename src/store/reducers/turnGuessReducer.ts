import { Guess, GuessNumber } from '../../types/guessTypes';
import { initalTurnState, TurnGuess, TurnGuessAction } from '../../types/turnGuess';
import * as actionTypes from '../actions/turnGuessActionTypes';

const turnGuessReducer = (state : TurnGuess  = initalTurnState, action: TurnGuessAction) => {
    switch (action.type) {
        case actionTypes.MAKE_GUESS : 
            const newGuessNumber: Guess ={
                
            }
            return{
                ...state,
                turnGuess: state.guessList.concat(newGuessNumber)
            }
    }
           
} 

export default turnGuessReducer