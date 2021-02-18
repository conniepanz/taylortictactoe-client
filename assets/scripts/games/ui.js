const store = require('../store')

const onNewGameSuccess = function (response) {
  $('#message').text('New Game Started')
  store.game = response.game
}
const onNewGameFailure = function (response) {
  $('#message').text('New Game, try again')
}
const onClickedCellSuccess = function (response) {
  $('#message').text('Nice move!')
  store.game = response.game
}
const onClickedCellFailure = function (response) {
  $('#message').text('Move not available, here is your error ' + 'message')
}
module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onClickedCellSuccess,
  onClickedCellFailure
}
