import { combineReducers } from 'redux';

import hoursReducer from 'redux_folder/reducers/hours.reducer';
import ticketsReducer from 'redux_folder/reducers/tickets.reducer';
import proyectsReducer from './proyects.reducer';

const rootReducer = combineReducers({
  hours: hoursReducer,
  tickets: ticketsReducer,
  proyects: proyectsReducer,
});

export default rootReducer;
