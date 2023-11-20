import {all} from 'redux-saga/effects';
import fetchDataWatcherSaga from './watcher';
import updateDataProfileComponentsWatcherSaga from './watcher_2';



function* rootWatcher(){
    yield all([fetchDataWatcherSaga(),updateDataProfileComponentsWatcherSaga()]);
}

export default rootWatcher;