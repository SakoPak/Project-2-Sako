'use strict'
const getFormFields = require('../../lib/get-form-fields')
const authApi = require('./api.js')
const authUi = require('./ui.js')

const onSignUp = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  authApi
    .signUp(data)
    .then(() => authUi.onSignUpSuccess())
    .catch(() => authUi.onSignUpFailure())
}

const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  authApi
    .signIn(data)
    .then((response) => authUi.onSignInSuccess(response))
    .catch(() => authUi.onSignInFailure())
}

const onSignOut = function () {
  authApi
    .signOut()
    .then(() => authUi.onSignOutSuccess())
    .catch(() => authUi.onSignOutFailure())
}

const onChangePassword = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  authApi
    .changePassword(data)
    .then((response) => authUi.onChangePasswordSuccess(response))
    .catch(() => authUi.onChangePasswordFailure())
}

const onShowSignIn = () => {
  $('#sign-in-container').show()
  $('#go-to-sign-in2').hide()
  $('#sign-up-container').hide()
  $('#signUpBtn').hide()
}

const onShowSignUp = () => {
  $('#sign-up-container').show()
  $('.sign-up-btn').hide()
}

const onShowUpdateForm = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  $('#all-profiles-page').hide()
  $('.update-profile-list').show()
  $('.update-profile-list').attr('data-id', id)
}
const onShowAllProfiles = () => {
  $('#all-profiles-page').show()
}

const onShowPWForm = () => {
  $('#passwordForm').show()
  $('#go-homeBtn').hide()
}

const onShowHomePage = () => {
  $('#landing-page').hide()
  $('#home-page').show()
  $('#create-form').show()
}

const onSignOutAgain = function () {
  authApi
    .signOut()
    .then(() => authUi.onSignOutAgainSuccess())
    .catch(() => authUi.onSignOutAgainFailure())
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onShowSignIn,
  onShowUpdateForm,
  onShowAllProfiles,
  onShowPWForm,
  onShowHomePage,
  onShowSignUp,
  onSignOutAgain
}
