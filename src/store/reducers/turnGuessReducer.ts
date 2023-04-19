import {Guess} from '../../types/guessTypes';
import {
  initalTurnState,
  TurnGuess,
  TurnGuessAction,
} from '../../types/turnGuess';
import * as actionTypes from '../actions/turnGuessActionTypes';


const turnGuessReducer = (
  state: TurnGuess = initalTurnState,
  action: TurnGuessAction,
) => {

  switch (action.type) {
    case actionTypes.START_GAME: 
      return {
        ...state,
        // numberToGuess: action.payload,
        remainingGuesses: 5,
        status: 'Playing',
        guessed: [],
      };
    
    case actionTypes.RESET_GAME: 
      return{
        ...initalTurnState
      }
  }
  return state;
};

export default turnGuessReducer;
