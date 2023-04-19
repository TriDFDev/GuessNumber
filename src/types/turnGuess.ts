import {generateRandomNumber} from '../utils/test';
import {Guess} from './guessTypes';

export interface TurnGuess {
  numberToGuess: number;
  remainingGuesses: number;
  status: 'Playing' | 'Win' | 'Lost';
  guessed: Guess[];
}

export const initalTurnState: TurnGuess = {
  numberToGuess: Number(generateRandomNumber()),
  remainingGuesses: 10,
  status: 'Playing',
  guessed: [],
};

export type TurnGuessAction = {
  type: string;
  payload: TurnGuess;
};

export interface StartGameAction {
  type: string;
  payload: number;
}
export type turnDispatchType = (args: TurnGuessAction) => TurnGuessAction;
