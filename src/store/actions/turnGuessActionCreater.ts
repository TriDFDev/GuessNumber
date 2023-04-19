import {
  StartGameAction,
  TurnGuess,
  TurnGuessAction,
} from '../../types/turnGuess';
import * as actionTypes from '../actions/turnGuessActionTypes';

export const startGame = (numberToGuess: number): StartGameAction => ({
  type: actionTypes.START_GAME,
  payload: numberToGuess,
});

export const resetGame = () => ({
  type: actionTypes.RESET_GAME
})