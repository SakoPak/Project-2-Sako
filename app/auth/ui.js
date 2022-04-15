'use strict'

const store = require('../store.js')
// const authEvents = require('./events.js')

const onSignUpSuccess = function () {
  $('#sign-up-message').show()
  $('#sign-up-message').html('<p>Thanks for signing up!</p>')
  $('#sign-in-containergt').show()

  $('#sign-up-message').addClass('success')

  setTimeout(() => {
    $('#sign-up-message').html('')
    $('#sign-up-message').removeClass('success')
  }, 5000)

  $('#changePassword').show()
  $('#sign-in-container').show()
  $('form').trigger('reset')
}

const onSignUpFailure = function (response) {
  $('#sign-up-message').html('<p>Error, please try again.</p>')
  $('#sign-up-message').addClass('success')

  setTimeout(() => {
    $('#sign-up-message').html('')
    $('#sign-up-message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  $('#sign-in-message').html('<p>Signed in successfully</p>')
  $('#sign-in-message').addClass('success')

  setTimeout(() => {
    $('#sign-in-message').html('')
    $('#sign-in-message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
  store.user = response.user
  // $('#sign-in-success').show()
}

const onSignInFailure = function () {
  $('#sign-in-message').html('<p>Sign in error, please try again!</p>')
  $('#sign-in-message').addClass('success')

  setTimeout(() => {
    $('#sign-in-message').html('')
    $('#sign-in-message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#sign-out-message').html('<p>You are signed out, !</p>')
  $('#sign-out-message').addClass('success')

  setTimeout(() => {
    $('#sign-out-message').html('')
    $('#sign-out-message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
  $('#sign-in-page').show()
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
