import { all, fork } from 'redux-saga/effects'

import gameSaga from 'sagas/game'

export default function* rootSaga() {
  yield all([
    fork(gameSaga)
  ])
}
