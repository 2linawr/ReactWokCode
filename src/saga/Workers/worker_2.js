import {put,delay} from 'redux-saga/effects';
import {actionRequestUpdateData} from '../../store/actions';


 function* UpdateDataProfileWorker(action) {
   yield delay(1000)
    yield put(actionRequestUpdateData(action.user));

  }

  export default UpdateDataProfileWorker;