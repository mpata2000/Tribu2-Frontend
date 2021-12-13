import { combineReducers } from 'redux';

import hoursReducer from 'redux_folder/reducers/hours.reducer';
import ticketsReducer from 'redux_folder/reducers/tickets.reducer';

const rootReducer = combineReducers({
  hours: hoursReducer,
  tickets: ticketsReducer,
});

export default rootReducer;
