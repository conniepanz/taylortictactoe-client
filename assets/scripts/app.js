'use strict'
const authEvents = require('./auth/events')
const gameEvents = require('./games/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#new-game').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#new-game').on('click', gameEvents.onCreateGame)
  $('.box').hide()
  $('.box').on('click', gameEvents.onUpdateGame)
  // your JS code goes here
})
