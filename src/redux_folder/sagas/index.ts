import { all } from 'redux-saga/effects';

import { watchHours } from './hours.sagas';

export default function* rootSaga() {
  yield all([watchHours()]);
}
