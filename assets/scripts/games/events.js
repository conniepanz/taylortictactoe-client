const api = require('./api')
const ui = require('./ui')
// const getFormFields = require('../../../lib/get-form-fields')

let player = 'X'
const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const onGameBoardClick = function (event) {
  event.preventDefault()
  console.log('it was clicked')

  const clickedCell = event.target

  if (player === 'X') {
    $(clickedCell).text('X')
    player = 'O'
    $('#message').text('Nice move! Turn is over!')
  } else if (player === 'O') {
    $(clickedCell).text('O')
    player = 'X'
    $('#message').text('Nice move! Turn is over!')
  } else {
    $('#message').text('Blank space taken! Turn is over!')
  }
//  api.onClickedCell()
//    .then(ui.onClickedCellSuccess)
//    .catch(ui.onClickedCellFailure)
}
module.exports = {
  onNewGame,
  onGameBoardClick
}
