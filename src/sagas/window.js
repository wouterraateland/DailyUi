import { take } from 'redux-saga/effects'

function* windowSaga() {
  while(true) {
    yield take('@@router/LOCATION_CHANGE')
    window.scrollTo(0, 0)
  }
}

export default windowSaga
