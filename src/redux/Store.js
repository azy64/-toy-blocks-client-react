import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import { batch } from 'react-redux';
import statusReducer, { fetchCalmStatus, fetchSecretStatus, fetchThawingStatus } from './reducer/statusReducer';
import blocksReducer, { fetchCalmBlocks, fetchSecretBlocks, fetchThawingBlocks } from './reducer/blocksReducer';

const root = combineReducers({ blocksReducer, statusReducer });
const store = createStore(root, applyMiddleware(thunk, logger));

store.dispatch(fetchThawingBlocks());
store.dispatch(fetchThawingStatus());
store.dispatch(fetchCalmStatus());
store.dispatch(fetchCalmBlocks());
store.dispatch(fetchSecretStatus());
store.dispatch(fetchSecretBlocks());
export default store;
