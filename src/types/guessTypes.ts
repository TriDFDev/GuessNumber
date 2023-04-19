import { generateRandomNumber } from "../utils/test"

export interface Guess{
    guessNumber : string,
    correctNumber: number,
    correctPosition: number,
}

export const initalState: Guess = {
    guessNumber : "",
    correctNumber:0,
    correctPosition: 0,
}

export type MakeGuessAction = {
  type: string;
  payload: string;
};
export type DispatchType = (args: MakeGuessAction) => MakeGuessAction;