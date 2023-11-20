// Код файла store.js
import { createStore,applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer/reducertest';
import {combineReducers} from 'redux';
import rootWatcher from '../saga/Watchers';



const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    reducer: reducer
  });
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootWatcher);

  export default store;