import { combineReducers } from 'redux';

import hoursReducer from 'redux_folder/reducers/hours.reducer';

const rootReducer = combineReducers({
  hours: hoursReducer,
});

export default rootReducer;
