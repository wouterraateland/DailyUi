import { take, call, select } from 'redux-saga/effects'

function* playerTurnSaga() {

}

function* battleSaga() {
  while(true) {
    const player = yield select(getNextPlayer)

    yield call(playerTurnSaga, player)

    const battleOver = yield select(isBattleOver)

    if (battleOver) { return true }
  }
}

export default battleSaga
