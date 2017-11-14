import { all, fork } from 'redux-saga/effects'

import windowSaga from 'sagas/window'
import project013Saga from 'sagas/013'
import project026Saga from 'sagas/026'

export default function* rootSaga() {
  yield all([
    fork(windowSaga),
    fork(project013Saga),
    fork(project026Saga),
  ])
}
