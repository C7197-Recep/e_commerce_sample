// redux/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import customerReducer from './reducers/customerReducer';

const rootReducer = combineReducers({
  customers: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
