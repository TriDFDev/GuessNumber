import { MakeGuessAction , Guess, CheckGuessAction } from "../../types/guessTypes";
import { TurnGuess } from "../../types/turnGuess";
import * as actionTypes from '../actions/guessActionTypes';

export const addGuessNumber = (guess:number) => {
  const action: MakeGuessAction = {
    type: actionTypes.ADD_NUMBER,
    payload: guess,
  };
  return action;
};

export const checkGuess = (counts:{} ) => {
  const action: CheckGuessAction = {
    type: actionTypes.CHECK_NUMBER,
    payload: counts,
  };
  return action;
}; 



export const clearGuessNumber = () => ({
  type: actionTypes.CLEAR_NUMBER,
});