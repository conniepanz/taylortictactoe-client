const api = require('./api')
const ui = require('./ui')

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
  ui.newGameSuccess()
}

module.exports = {
  onNewGame
}
