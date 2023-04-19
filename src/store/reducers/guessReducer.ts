import {Action} from 'redux';
import {MakeGuessAction, Guess, initalState} from '../../types/guessTypes';
import * as actionTypes from '../actions/guessActionTypes';

const guessReducer = (state: Guess = initalState, action: MakeGuessAction) => {
  switch (action.type) {
    case actionTypes.ADD_NUMBER:  
      return {
        ...state,
        guessNumber : state.guessNumber + action.payload
      };
  }
  return state;
};

export default guessReducer;
