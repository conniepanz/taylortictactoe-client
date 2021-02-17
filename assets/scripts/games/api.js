const config = require('../config')
const store = require('../store')

const newGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games/',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}
const clickedCell = function (index, value, over) {
  return $.ajax({
    url: config.apiUrl + '/games' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    game: {
      cell: {
        index: index,
        value: value
      },
      over: over
    }
  })
}
module.exports = {
  newGame,
  clickedCell
}
