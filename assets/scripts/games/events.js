const api = require('./api')
const ui = require('./ui')
const store = require('../store')
// const getFormFields = require('../../../lib/get-form-fields')

let gameOver = false
let moves = 0
let player = 'X'

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('it was clicked')
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
  $('.box').show()
}

const onCheckWinner = function (event) {
  if (store.board[0] !== '' && store.board[0] === store.board[1] && store.board[1] === store.board[2]) {
    return true
  } else if (store.board[3] !== '' && store.board[3] === store.board[4] && store.board[4] === store.board[5]) {
    return true
  } else if (store.board[6] !== '' && store.board[6] === store.board[7] && store.board[7] === store.board[8]) {
    return true
  } else if (store.board[0] !== '' && store.board[0] === store.board[3] && store.board[3] === store.board[6]) {
    return true
  } else if (store.board[1] !== '' && store.board[1] === store.board[4] && store.board[4] === store.board[7]) {
    return true
  } else if (store.board[2] !== '' && store.board[2] === store.board[5] && store.board[5] === store.board[8]) {
    return true
  } else if (store.board[0] !== '' && store.board[0] === store.board[4] && store.board[4] === store.board[8]) {
    return true
  } else if (store.board[2] !== '' && store.board[2] === store.board[4] && store.board[4] === store.board[6]) {
    return true
  }
  return false
}

const onUpdateGame = function (index, value, over) {
  event.preventDefault()
  console.log('what is happening')

  const clickedCell = event.target
  const clickedCellIndex = $(clickedCell).data('cell-index')
  console.log($(clickedCell).data('cell-index'))
  api.updateGame(index, player, over)
    .then(response => {
      if (onCheckWinner(event) === true) {
        $('#message').show().text('Game Over!')
        gameOver = !gameOver
      } if (store.player === 'X') {
        store.board[clickedCellIndex] = 'X'
        $(clickedCell).text('X')
        $('#message').text('Nice move! Player O, your turn!')
      } if (store.player === 'O') {
        store.board[clickedCellIndex] = 'O'
        $(clickedCell).text('O')
        $('#message').text('Nice move! Player X, your turn!')
      } else {
        $('#message').text('Please pick a space that is unoccupied!')
        console.log('why')
      }
      ui.onUpdateGameSuccess(response, index, player)
    })
    .catch(ui.onUpdateGameFailure)

  //
  //

  //
  //
  player = !player
  if (gameOver === true) {
    $('#message').show().text('Game Over!')
  }
  //
  moves++
  if (moves === 9 && onCheckWinner(event) === false) {
    $('#message').show().text('Game Over!')
    $('#message').show().text('Draw!')
    $('#message').hide()
  }
}
//  api.onClickedCell()
//    .then(ui.onClickedCellSuccess)
//    .catch(ui.onClickedCellFailure)
module.exports = {
  onCreateGame,
  onCheckWinner,
  onUpdateGame
}
