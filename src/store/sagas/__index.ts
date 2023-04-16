import {all} from 'redux-saga/effects';
import guessSaga from './guessSaga';
import turnSaga from './turnSaga';

export default function* rootSaga(){
    yield all([guessSaga(), turnSaga()])
}