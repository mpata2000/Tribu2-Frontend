import { all } from 'redux-saga/effects';

import { watchHours } from './hours.sagas';
import { watchTickets, watchProducts, watchTareas, watchResources } from './tickets.sagas';

export default function* rootSaga(): Generator {
  yield all([watchHours(), watchTickets(), watchProducts(), watchTareas(), watchResources()]);
}
