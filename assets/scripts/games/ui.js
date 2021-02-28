const store = require('../store')

const onCreateGameSuccess = function (response) {
  $('#message').text('New Game Started')
  store.game = response.game
  store.player = 'X'
}

const onCreateGameFailure = function (response) {
  $('#message').text('New Game, try again')
}
const onUpdateGameSuccess = function (response) {
  $('#message').text('Nice move!')
  store.game = response.game
  if (store.player === 'X') store.player = 'O'
  else store.player = 'X'
}

const onUpdateGameFailure = function (response) {
  $('#message').text('Move not available, here is your error ' + 'message')
}
module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
