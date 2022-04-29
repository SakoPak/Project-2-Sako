'use strict'
const getFormFields = require('../../lib/get-form-fields')
const dogAuthApi = require('./api.js')
const dogAuthUi = require('./ui.js')

const onCreateProfile = (event) => {
  event.preventDefault()
  console.log('created profile in events.js')
  const form = event.target
  const data = getFormFields(form)
 
  dogAuthApi
    .createProfile(data)
    .then((response) => dogAuthUi.onCreateProfileSuccess(response))
    .catch(() => dogAuthUi.onCreateProfileFailure())
}

const onIndexProfiles = () => {
  dogAuthApi
    .indexProfiles()
    .then(dogAuthUi.onIndexProfileSuccess)

    .catch(() => dogAuthUi.onIndexProfileFailure())
}

const onViewProfile = (event) => {
  const id = event.target.getAttribute('data-id')

  dogAuthApi
    .viewProfile(id)
    .then((response) => dogAuthUi.onViewProfileSuccess(response))
    .catch(() => dogAuthUi.onViewProfileFailure())
}

const onDeleteProfile = (event) => {
  event.preventDefault()
  const id = event.target.getAttribute('data-id')
  dogAuthApi
    .deleteProfile(id)
    .then(() => dogAuthUi.onDeleteProfileSuccess())
    .catch(() => dogAuthUi.onDeleteProfileFailure())
}

const onUpdateProfile = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)

  const id = event.target.getAttribute('data-id')
  dogAuthApi
    .updateProfile(id, formData)
    .then(() => dogAuthUi.onUpdateProfileSuccess())
    .catch(() => dogAuthUi.onUpdateProfileFailure)
}
const onHideUpdateForm = function (event) {
  $('.update-profile-list').hide()
}

module.exports = {
  onCreateProfile,
  onIndexProfiles,
  onViewProfile,
  onDeleteProfile,
  onUpdateProfile,
  onHideUpdateForm
}
