import { generateRandomNumber } from "../utils/test";
import { Guess } from "./guessTypes";

export interface TurnGuess{
    numberToGuess: number,
    guessCount: number,
    guessList: Guess[],
}

export const initalTurnState : TurnGuess = {
    numberToGuess: (Number(generateRandomNumber())),
    guessCount: 0,
    guessList: [],
}

export type TurnGuessAction = {
    type: string,
    guessList?: Guess[],
    turnGuess?: TurnGuess
}
export type turnDispatchType = (args: TurnGuessAction) => TurnGuessAction