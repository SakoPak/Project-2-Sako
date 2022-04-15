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
    .then(dogAuthUi.onViewProfileSuccess)
    .catch(() => dogAuthUi.onViewProfileFailure())
}

const onDeleteProfile = (event) => {
  event.preventDefault()
  console.log('Deleting profile in events.js')
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  dogAuthApi
    .deleteProfile(data.dog.id)
    .then(() => dogAuthApi.onDeleteBookSuccess())
    .catch(() => dogAuthApi.onDeleteBookFailure())
}

const onUpdateProfile = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  const id = formData.dog.id
  dogAuthApi
    .update(id, formData)
    .then(dogAuthApi.onUpdateSuccess)
    .catch(dogAuthApi.onError)
}

module.exports = {
  onCreateProfile,
  onIndexProfiles,
  onViewProfile,
  onDeleteProfile,
  onUpdateProfile
}
