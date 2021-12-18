import { all } from 'redux-saga/effects';

import { watchHours } from './hours.sagas';
import { watchProyects } from './proyects.sagas';
import { watchTickets } from './tickets.sagas';

export default function* rootSaga(): Generator {
  yield all([watchHours(), watchTickets(), watchProyects()]);
}
