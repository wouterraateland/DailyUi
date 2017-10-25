import { delay } from 'redux-saga'
import { take, call, select, put } from 'redux-saga/effects'

import { getUsers } from 'selectors/013'

const messages = {
  'Jack': [ 'Arr', 'ARRRR MATEY' ],
  'Walt': [ 'Hi there!', 'What a lovely day' ],
  default: [ 'Hello there' ],
}

function* messageSaga(userName) {
  const m = messages[userName] || messages['default']

  return yield m[Math.floor(Math.random() * m.length)]
}

function* responseSaga(message) {
  const users = yield select(getUsers)
  const called = users.find(user =>
    message.toLowerCase().includes(user.name.toLowerCase()))

  if (called) {
    const message = yield call(messageSaga, called.name)

    if (called.state === 'offline') {
      yield call(delay, 500)
      yield put({
        type: 'GO_ONLINE',
        userId: called.id,
      })
    }

    yield call(delay, 500)

    yield put({
      type: 'SEND_MESSAGE',
      sender: called.id,
      message,
    })
  }
}

function* project013Saga() {
  while(true) {
    const action = yield take('SEND_MESSAGE')
    if (action.sender === 0) {
      yield call(responseSaga, action.message)
    }
  }
}

export default project013Saga
