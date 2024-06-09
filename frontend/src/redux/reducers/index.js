import { combineReducers } from 'redux';
import customerReducer from './customerReducer'; // customerReducer.js dosyası oluşturulmalı

const rootReducer = combineReducers({
  customers: customerReducer,
});

export default rootReducer;
