import { Guess } from '../../types/guessTypes';
import { TurnGuess } from '../../types/turnGuess';
import { TurnGuessAction } from '../../types/turnGuess';
import * as actionTypes from '../actions/turnGuessActionTypes';

export const newGuessNumber = (guessList: Guess[]) => {
    const action: TurnGuessAction = {
        type: actionTypes.MAKE_GUESS,
        guessList,
    } 
    return action

}
export const startGame = ( turnGuess : TurnGuess) => {
    const action : TurnGuessAction = {
        type: actionTypes.START_GAME,
        turnGuess,
    }
    return action
}