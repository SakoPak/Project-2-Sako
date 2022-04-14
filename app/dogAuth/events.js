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
    .then((response) => dogAuthUi.onIndexProfileSuccess(response))

    .catch(() => dogAuthUi.onIndexProfileFailure())
}

const onViewProfile = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  dogAuthApi
    .viewProfile(data)
    .then((response) => dogAuthUi.onViewProfileSuccess(response))
    .catch(() => dogAuthUi.onViewProfileFailure())
}



module.exports = {
  onCreateProfile,
  onIndexProfiles,
  onViewProfile
}
