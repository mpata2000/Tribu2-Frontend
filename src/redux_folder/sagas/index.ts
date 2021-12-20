import { watchFile } from 'fs';
import { all } from 'redux-saga/effects';

import { watchHours } from './hours.sagas';
import { watchProyects } from './proyects.sagas';
import { watchTickets, watchProducts, watchTareas, watchResources, watchClients } from './tickets.sagas';

export default function* rootSaga(): Generator {
  yield all([watchHours(), watchTickets(), watchProducts(), watchTareas(), watchResources(), watchClients(), watchProyects()]);
}
