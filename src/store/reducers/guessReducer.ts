import {Action} from 'redux';
import {MakeGuessAction, Guess, initalState} from '../../types/guessTypes';
import * as actionTypes from '../actions/guessActionTypes';

const guessReducer = (state: Guess = initalState, action: any) => {
  switch (action.type) {
    case actionTypes.ADD_NUMBER:  
      return {
        ...state,
        guessNumber: action.payload,
      };
    
    case actionTypes.CHECK_NUMBER:
      return {
        ...state,
        correctNumber: action.payload.correctNumber,
        correctPosition: action.payload.correctPosition,
      };   

    case actionTypes.CLEAR_NUMBER: 
      return {
        ...initalState
      }
  }
  return state;
};

export default guessReducer;
