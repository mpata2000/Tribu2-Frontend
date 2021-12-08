import { all } from 'redux-saga/effects';

import { watchHours } from './hours.sagas';
import { watchTickets } from './tickets.sagas';

export default function* rootSaga(): Generator {
  yield all([watchHours()]);
  yield all([watchTickets()]);
}
