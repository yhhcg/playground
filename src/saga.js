/* eslint-disable require-jsdoc */
import {all} from 'redux-saga/effects';

import normalizedData from './NormalizedData/saga';
import stateShape from './StateShape/saga';

export default function* rootSaga() {
  yield all([
    normalizedData(),
    stateShape(),
  ]);
}
