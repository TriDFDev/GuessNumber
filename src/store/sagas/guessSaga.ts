import {put, select, takeEvery} from 'redux-saga/effects';
import {ADD_NUMBER} from '../actions/guessActionTypes';
import {addGuessNumber, checkGuess} from '../actions/guessActionCreate';
import {RoodState} from '../store';
import {Guess} from '../../types/guessTypes';
import NumberUtils from '../../utils/NumberUtils';
import {TurnGuess} from '../../types/turnGuess';
import { callMakeGuess } from '../actions/turnGuessActionCreater';

function* handleAddNumber() {
  const yourGuess: Guess = yield select((state: RoodState) => state.guess);
  const numberToGuess: TurnGuess = yield select(
    (state: RoodState) => state.turnGuessReducer,
  );
  const counts: {} = yield {
    correctNumber: NumberUtils.countCorrectDigits(
      yourGuess.guessNumber.toString(),
      numberToGuess.numberToGuess.toString(),
    ),
    correctPosition: NumberUtils.countCorrectPositions(
      yourGuess.guessNumber.toString(),
      numberToGuess.numberToGuess.toString(),
    ),
  };  
  yield put(checkGuess(counts));
  yield put(callMakeGuess());
}

export default function* guessSaga() {
  yield takeEvery(ADD_NUMBER, handleAddNumber);
}
