import { createStore, applyMiddleware } from "redux"; //Needed for applyMiddleware
import thunk from 'redux-thunk';
import rootReducer from './reducers'


const initialState = {}

const middleware = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default store;


