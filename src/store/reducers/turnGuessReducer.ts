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
    case actionTypes.SET_GUESS_NUMBER: 
      return {
        ...state,
        numberToGuess: action.payload,
      };
    
    case actionTypes.MAKE_GUESS : 
      return {
        ...state,
        status: action.payload.status,
        guessed: state.guessed.concat(action.payload.guessNumber),
        remainingGuesses: state.remainingGuesses - 1,
      };

    case actionTypes.RESET_GAME: 
      return{
        ...initalTurnState
      }
  }
  return state;
};

export default turnGuessReducer;
