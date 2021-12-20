import { combineReducers } from 'redux';

import hoursReducer from 'redux_folder/reducers/hours.reducer';
import ticketsReducer from 'redux_folder/reducers/tickets.reducer';
import proyectsReducer from './proyects.reducer';
import tareasReducer from './tareas.reducer';

const rootReducer = combineReducers({
  hours: hoursReducer,
  tickets: ticketsReducer,
  proyects: proyectsReducer,
  tareas: tareasReducer,
});

export default rootReducer;
