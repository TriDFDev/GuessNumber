import { generateRandomNumber } from "../utils/test"

export interface GuessNumber {
    guess : number
}

export interface Guess{
    guessNumber : GuessNumber[],
    correctNumber: number,
    correctPosition: number,
}

export const initalState: Guess = {
    guessNumber : [],
    correctNumber: Number(generateRandomNumber()),
    correctPosition: 0,
}

export type GuessAction = {
    type: string,
    guessNumber?: GuessNumber
    guessNumbe?: Guess
}
export type DispatchType = (args: GuessAction) => GuessAction