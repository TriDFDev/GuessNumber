import {
  StartGameAction,
  TurnGuess,
  TurnGuessAction,
} from '../../types/turnGuess';
import * as actionTypes from '../actions/turnGuessActionTypes';

export const setNumberToGuess = (numberToGuess: number): StartGameAction => ({
  type: actionTypes.SET_GUESS_NUMBER,
  payload: numberToGuess,
});

export const startGame = () => ({
  type: actionTypes.START_GAME,
});

export const makeGuess = (TurnGuess: any) => {
  const action: TurnGuessAction = {
    type: actionTypes.MAKE_GUESS,
    payload: TurnGuess,
  };
  return action;
};

export const callMakeGuess = () => ({
  type: actionTypes.CALL_MAKE_GUESS,
})

export const resetGame = () => ({
  type: actionTypes.RESET_GAME,
});
