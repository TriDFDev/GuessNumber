import { MakeGuessAction , Guess } from "../../types/guessTypes";
import * as actionTypes from '../actions/guessActionTypes';

export const addGuessNumber = (guess:string) => {
  const action: MakeGuessAction = {
    type: actionTypes.ADD_NUMBER,
    payload: guess,
  };
  return action;
};
