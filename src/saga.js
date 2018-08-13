/* eslint-disable require-jsdoc */
import {all} from 'redux-saga/effects';

import stateShape from './StateShape/saga';

export default function* rootSaga() {
  yield all([
    stateShape(),
  ]);
}
