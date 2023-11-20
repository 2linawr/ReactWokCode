import {put,call, delay} from 'redux-saga/effects';
import { actionRequestStarted,actionRequestSuccess,actionRequestFailed} from '../../store/actions';
import axios from 'axios'


function* fetchDataWorkerSaga(action) {
    yield put(actionRequestStarted());
   try {
 // Вызов API используя Axios
 const responce = yield call(axios.get, action.url);
 const responce_2 = yield call(axios.get, action.url_2);
 yield delay(1000);
 yield put(actionRequestSuccess(responce.data,responce_2.data));
    } catch (error) {
      yield put(actionRequestFailed(error));
    }
  }
export default fetchDataWorkerSaga;

