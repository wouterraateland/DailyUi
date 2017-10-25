import { all, fork } from 'redux-saga/effects'

import project013Saga from 'sagas/013'

export default function* rootSaga() {
  yield all([
    fork(project013Saga)
  ])
}
