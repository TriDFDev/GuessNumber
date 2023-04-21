import {
  all,
  call,
  put,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import {generateRandomNumber} from '../../utils/test';
import {
  makeGuess,
  setNumberToGuess,
  startGame,
} from '../actions/turnGuessActionCreater';
import {
  CALL_MAKE_GUESS,
  RESET_GAME,
  SET_GUESS_NUMBER,
  START_GAME,
} from '../actions/turnGuessActionTypes';
import {RoodState} from '../store';
import {TurnGuess} from '../../types/turnGuess';
import {Guess} from '../../types/guessTypes';

export function* handleStartGame() {
  yield put(setNumberToGuess(Number(generateRandomNumber())));
}

// function* resetGame() {
//   yield put(startGame(Number(generateRandomNumber())));
// }

export function* saveGuessData() {
  const guessNumber: Guess = yield select((state: RoodState) => state.guess);
  const numberToGuess: TurnGuess = yield select(
    (state: RoodState) => state.turnGuessReducer,
  );

  const data = (status: string, guessNumber: Guess) => {
    const myData = {
      status: status,
      guessNumber: guessNumber,
    };
    return myData;
  };
  if (
    Number(guessNumber.guessNumber) !== numberToGuess.numberToGuess &&
    numberToGuess.remainingGuesses > 1
  ) {
    yield put(makeGuess(data('Playing', guessNumber)));
  } else if (
    Number(guessNumber.guessNumber) === numberToGuess.numberToGuess &&
    numberToGuess.remainingGuesses > 1
  ) {
    yield put(makeGuess(data('Win', guessNumber)));
  }else{
    yield put(makeGuess(data('Lose', guessNumber)));
  }

}

export default function* turnSaga() {
  yield takeEvery(START_GAME, handleStartGame);
  yield takeEvery(CALL_MAKE_GUESS, saveGuessData);
  // yield takeEvery(RESET_GAME, resetGame);
}
