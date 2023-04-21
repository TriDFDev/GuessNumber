import {generateRandomNumber} from '../utils/test';
import {Guess} from './guessTypes';

export interface TurnGuess {
  numberToGuess: number;
  remainingGuesses: number;
  status: 'Playing' | 'Win' | 'Lost';
  guessed: Guess[];
}

export const initalTurnState: TurnGuess = {
  numberToGuess: 0,
  remainingGuesses: 10,
  status: 'Playing',
  guessed: [],
};

export type TurnGuessAction = {
  type: string;
  payload: any;
};

export interface StartGameAction {
  type: string;
  payload: number;
}

export interface saveGuessData{
  type: string;
  payload: TurnGuess
}

export type turnDispatchType = (args: TurnGuessAction) => TurnGuessAction;
