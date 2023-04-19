import { combineReducers } from "redux";
import guessReducer from "./guessReducer";
import turnGuessReducer from "./turnGuessReducer";

export const rootReducer = combineReducers(
    {
        guess: guessReducer,
        turnGuessReducer: turnGuessReducer
    }
)

export type RootState = ReturnType<typeof rootReducer>
