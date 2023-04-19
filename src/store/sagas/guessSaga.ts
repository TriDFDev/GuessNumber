import {takeEvery} from 'redux-saga/effects';
import {ADD_NUMBER} from '../actions/guessActionTypes';

function* handleAddNumber() {
  console.log('herer=');
}

export default function* guessSaga() {
  yield takeEvery(ADD_NUMBER, handleAddNumber);
}
