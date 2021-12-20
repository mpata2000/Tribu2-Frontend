import { combineReducers } from 'redux';

import hoursReducer from 'redux_folder/reducers/hours.reducer';
import ticketsReducer from 'redux_folder/reducers/tickets.reducer';
import productsReducer from 'redux_folder/reducers/products.reducer';
import tareasReducer from 'redux_folder/reducers/tareas.reducer';
import resourcesReducer from 'redux_folder/reducers/resources.reducer';
import clientsReducer from 'redux_folder/reducers/clients.reducer';

import proyectsReducer from './proyects.reducer';

const rootReducer = combineReducers({
  hours: hoursReducer,
  tickets: ticketsReducer,
  products: productsReducer,
  tareas: tareasReducer,
  resources: resourcesReducer,
  clients: clientsReducer,
  proyects: proyectsReducer,
});

export default rootReducer;
