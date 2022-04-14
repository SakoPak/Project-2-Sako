'use strict'

const store = require('../store.js')
// const authEvents = require('./events.js')

const onSignUpSuccess = function () {
  $('#sign-up-message').show()
  $('#sign-up-message').html('<p>Thanks for signing up!</p>')
  $('form').trigger('reset')
}

const onSignUpFailure = function (response) {
  $('#sign-up-message').html('<p>Error, please try again.</p>')
  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  $('#sign-in-message').html('<p>Signed in successfully</p>')
  $('form').trigger('reset')
  store.user = response.user
  // $('#sign-in-success').show()
}

const onSignInFailure = function () {
  $('#sign-in-message').html('<p>Sign in error, please try again!</p>')
  $('form').trigger('reset')
}

const onSignOutSuccess = function () {
  // $('#sign-out-message').show()
  $('#sign-out-message').html('<p>You are signed out, !</p>')
  $('form').trigger('reset')
  // $('#signOut').hide()
  $('#login-button').show()
}

const onSignOutFailure = function () {
// $('#sign-out-message').show()
  $('#sign-out-message').html('<p>Error while signing out, please try again.</p>')
}

const onChangePasswordSuccess = function () {
  $('#change-password-message').html('<p>Password has been changed.</p>')
}

const onChangePasswordFailure = function () {
  $('#change-password-message').html('<p>Error while changing password, please try again.</p>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
