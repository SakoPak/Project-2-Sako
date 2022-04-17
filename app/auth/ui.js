'use strict'

const store = require('../store.js')
// const authEvents = require('./events.js')

const onSignUpSuccess = function () {
  $('#signUpBtn').hide()
  $('#sign-up-message').show()
  $('#sign-up-message').html('<p>Thanks for signing up!</p>')

  $('#sign-up-message').addClass('success')

  setTimeout(() => {
    $('#sign-up-message').html('')
    $('#sign-up-message').removeClass('success')
  }, 5000)
  $('#sign-up-container').hide()
  $('#sign-in-container').show()
  $('#changePassword').show()
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
  $('#sign-in-message').html('<p>Sign in success!</p>')
  $('#sign-out-pwForm').show()
  $('#passwordFormBtn').show()
  $('#go-homeBtn').show()
  $('#sign-in-container').hide()
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
  $('#sign-out-message').html('<p>You are signed out!</p>')
  $('#sign-out-message').addClass('success')

  setTimeout(() => {
    $('#sign-out-message').html('')
    $('#sign-out-message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
  $('#sign-in-page').show()
  // $('#landing-page').show()
  $('#sign-in-container').show()
  $('#go-homeBtn').hide()
  $('#sign-out-pwForm').hide()
  $('#passwordFormBtn').hide()
  $('#signOut').hide()
}

const onSignOutAgainSuccess = function () {
  $('#sign-out-message').html('<p>You are signed out!</p>')
  $('#sign-out-message').addClass('success')

  setTimeout(() => {
    $('#sign-out-message').html('')
    $('#sign-out-message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
  $('#home-page').hide()
  $('#all-profiles-page').hide()
  // $('#landing-page').show()
  $('#sign-in-container').show()
  $('#go-homeBtn').hide()
  $('#sign-out-pwForm').hide()
  $('#signOut').hide()
  $('#home-page').hide()
}
const onSignOutAgainFailure = function () {
  $('#sign-out-message').html(
    '<p>Error while signing out, please try again.</p>'
  )
  $('#sign-out-message').addClass('success')

  setTimeout(() => {
    $('#sign-out-message').html('')
    $('#sign-out-message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
}

const onSignOutFailure = function () {
  $('#sign-out-message').html('<p>Error while signing out, please try again.</p>')
  $('#sign-out-message').addClass('success')

  setTimeout(() => {
    $('#sign-out-message').html('')
    $('#sign-out-message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
}

const onChangePasswordSuccess = function () {
  $('#change-password-message').html('<p>Password has been changed.</p>')
  $('#change-password-message').addClass('success')

  setTimeout(() => {
    $('#change-password-message').html('')
    $('#change-password-message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#change-password-message').html('<p>Error while changing password, please try again.</p>')
  $('#change-password-message').addClass('success')

  setTimeout(() => {
    $('#change-password-message').html('')
    $('#change-password-message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutAgainSuccess,
  onSignOutAgainFailure
}
