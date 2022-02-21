import { combineReducers } from 'redux';
import { modalReducer } from './modalReducer';

const rootReducer = combineReducers({ modalReducer });

export { modalReducer };
export default rootReducer;
