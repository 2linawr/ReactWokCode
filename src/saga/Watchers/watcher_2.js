import {takeEvery} from 'redux-saga/effects';
import UpdateDataProfileWorker from '../Workers/worker_2';


function* updateDataProfileComponentsWatcherSaga(){
    yield takeEvery('UPDATE_DATA', UpdateDataProfileWorker);
  }

export default updateDataProfileComponentsWatcherSaga;