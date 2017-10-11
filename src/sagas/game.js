import { take, call, select } from 'redux-saga/effects'

import Actions from 'actions'
import { getNextPlayer, isBattleOver } from 'selectors/game'

function* playerTurnSaga(player) {
  if (player.isComputer) {
    yield console.log('computer is playing')
  } else {
    yield console.log('player is playing')
  }
}

function* battleSaga() {
  while(true) {
    const player = yield select(getNextPlayer)

    yield call(playerTurnSaga, player)

    const battleOver = yield select(isBattleOver)

    if (battleOver) { return true }
  }
}

function* gameSaga() {
  while(true) {
    yield take(Actions.START_BATTLE)
    yield call(battleSaga)
  }
}

export default gameSaga
