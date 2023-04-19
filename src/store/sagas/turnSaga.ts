import {all, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {generateRandomNumber} from '../../utils/test';
import {startGame} from '../actions/turnGuessActionCreater';
import {RESET_GAME, START_GAME} from '../actions/turnGuessActionTypes';

function* handleStartGame() {
  yield put(startGame(Number(generateRandomNumber())));
}

function* resetGame() {
  yield put(startGame(Number(generateRandomNumber())));
}

export default function* turnSaga() {
  yield takeEvery(START_GAME, handleStartGame);
  yield takeEvery(RESET_GAME, resetGame);
}
