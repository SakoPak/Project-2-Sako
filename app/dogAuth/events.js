'use strict'
const getFormFields = require('../../lib/get-form-fields')
const dogAuthApi = require('./api.js')
const dogAuthUi = require('./ui.js')

const onCreateProfile = (event) => {
  event.preventDefault()
  console.log('created profile in events.js')
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  dogAuthApi
    .createProfile(data)
    .then((response) => dogAuthUi.onCreateProfileSuccess(response))
    .catch(() => dogAuthUi.onCreateProfileFailure())
}

const onIndexProfiles = () => {
  console.log('Indexing Profiles in event listener!!')
  dogAuthApi
    .indexProfiles()
    .then(dogAuthUi.onIndexProfileSuccess)

    .catch(() => dogAuthUi.onIndexProfileFailure())
}

const onViewProfile = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  dogAuthApi
    .viewProfile(data.dog.id)
    .then(() => dogAuthUi.onViewProfileSuccess)
    .catch(() => dogAuthUi.onViewProfileFailure())
}

const onDeleteProfile = (event) => {
  event.preventDefault()
  console.log('Deleting profile in events.js')
  const id = event.target.getAttribute('data-id')
  dogAuthApi
    .deleteProfile(id)
    .then(() => dogAuthUi.onDeleteProfileSuccess())
    .catch(() => dogAuthUi.onDeleteProfileFailure())
}

const onUpdateProfile = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(formData)

  const id = event.target.getAttribute('data-id')
  dogAuthApi
    .updateProfile(id, formData)
    .then(() => dogAuthUi.onUpdateProfileSuccess())
    .catch(() => dogAuthUi.onUpdateProfileFailure)
}

module.exports = {
  onCreateProfile,
  onIndexProfiles,
  onViewProfile,
  onDeleteProfile,
  onUpdateProfile
}
