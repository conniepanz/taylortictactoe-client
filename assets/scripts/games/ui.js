const store = require('../store')

const newGameSuccess = function (response) {
  $('#error-message').text('New Game Started')
  store.game = response.game
}
const newGameFailure = function (response) {
  $('#error-message').text('New Game, try again')
}
const onClickedCellSuccess = function (response) {
  $('error-message').text('Nice move!')
  store.game = response.game
}
const onClickedCellFailure = function (response) {
  $('error-message').text('Move not available, here is your error ' + 'message')
}
module.exports = {
  newGameSuccess,
  newGameFailure,
  onClickedCellSuccess,
  onClickedCellFailure
}
