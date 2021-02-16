const newGameSuccess = function (response) {
  $('#error-message').text('New Game Started')
  $('#new-game').trigger('reset')
}
const newGameFailure = function (response) {
  $('#error-message').text('New Game, try again')
}

module.exports = {
  newGameSuccess,
  newGameFailure
}
