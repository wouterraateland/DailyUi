import { delay } from 'redux-saga'
import { take, call, put } from 'redux-saga/effects'

function* project026Saga() {
  while(true) {
    yield take('SEND_EMAIL_REQUEST')
    yield call(delay, 2000)
    yield put({ type: 'SEND_EMAIL_SUCCESS' })
    yield call(delay, 2000)
    yield put({ type: 'SEND_EMAIL_RESET' })
  }
}

export default project026Saga
