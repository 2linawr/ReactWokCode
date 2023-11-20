import {takeEvery} from 'redux-saga/effects';
import fetchDataWorkerSaga from '../Workers/worker';
import UpdateDataProfileWorker from '../Workers/worker';

function* fetchDataWatcherSaga() {
    yield takeEvery('REQUEST_DATA', fetchDataWorkerSaga);
  }

export default fetchDataWatcherSaga;

