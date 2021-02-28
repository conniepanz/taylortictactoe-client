const api = require('./api')
const ui = require('./ui')
const store = require('../store')
// const getFormFields = require('../../../lib/get-form-fields')

let gameOver = false
const board = ['', '', '', '', '', '', '', '', '']
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
  if (board[0] !== '' && board[0] === board[1] && board[1] === board[2]) {
    return true
  } else if (board[3] !== '' && board[3] === board[4] && board[4] === board[5]) {
    return true
  } else if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
    return true
  } else if (board[0] !== '' && board[0] === board[3] && board[3] === board[6]) {
    return true
  } else if (board[1] !== '' && board[1] === board[4] && board[4] === board[7]) {
    return true
  } else if (board[2] !== '' && board[2] === board[5] && board[5] === board[8]) {
    return true
  } else if (board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
    return true
  } else if (board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
    return true
  }
  return false
}

const onUpdateGame = function (index, value, over) {
  event.preventDefault()
  console.log('what is happening')

  const clickedCell = event.target
  console.log($(clickedCell).data('cell-index'))
  api.updateGame(index, player, over)
    .then(response => {
      console.log(clickedCell)
      if (store.player === 'X') {
        $(clickedCell).text('X')
        $('#message').text('Nice move! Player O, your turn!')
      } if (store.player === 'O') {
        $(clickedCell).text('O')
        $('#message').text('Nice move! Player X, your turn!')
      } if (onCheckWinner(event) === true) {
        $('#message').show().text('Game Over!')
        gameOver = !gameOver
      } else {
        $('#message').text('Please pick a space that is unoccupied!')
        setTimeout(() => {
          $('#message').text('')
        }, 2000)
      }
      ui.onUpdateGameSuccess(response, index, player)
    })
    .catch(ui.onUpdateGameFailure)
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
