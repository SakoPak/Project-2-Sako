'use strict'
const getFormFields = require('../../lib/get-form-fields')
const authApi = require('./api.js')
const authUi = require('./ui.js')
// const store = require('../store.js')

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
  console.log(data)

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
  console.log(data)

  authApi
    .changePassword(data)
    .then((response) => authUi.onChangePasswordSuccess(response))
    .catch(() => authUi.onChangePasswordFailure())
}

const onShowSignIn = () => {
  $('#sign-in-container').show()
}

const onShowUpdateForm = () => {
  $('#update-form').show()
  $('#sign-in-container').hide()
}
const onShowAllProfiles = () => {
  $('#all-profiles-page').show()
}

const onShowPWForm = () => {
  $('#passwordForm').show()
}

const onShowHomePage = () => {
  $('#home-page').show()
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
  onShowHomePage
}
