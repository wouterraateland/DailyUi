import { createSelector } from 'reselect'

const isAlly = player => player.isAlly
const isOpponent = player => !player.isAlly

export const getBattle = state => state.game.battle
export const getPlayersById = state => state.game.players.byId

export const getPlayersInBattle = createSelector(
  [ getBattle, getPlayersById ],
  (battle, playersById) => battle.playerIds.map(
    playerId => playersById[playerId]
  )
)

export const getAlliesInBattle = createSelector(
  getPlayersInBattle,
  players => players.filter(isAlly)
)

export const getOpponentsInBattle = createSelector(
  getBattle,
  players => players.filter(isOpponent)
)

export const getNextPlayer = state => createSelector(
  getPlayersInBattle,
  players => players[0]
)

export const isBattleWon = state => createSelector(
  getOpponentsInBattle,
  opponents => opponents.all(opponent => opponent.health <= 0)
)

export const isBattleLost = state => createSelector(
  getAlliesInBattle,
  allies => allies.all(ally => ally.health <= 0)
)

export const isBattleOver = state => createSelector(
  [isBattleWon, isBattleLost],
  (won, lost) => won || lost
)
