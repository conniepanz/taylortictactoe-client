const config = require('../config')
const store = require('../store')

const createGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games/',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}
const updateGame = function (index, player, over) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: 0,
          value: 'X'
        },
        over: false
      }
    }
  })
}
module.exports = {
  createGame,
  updateGame
}
