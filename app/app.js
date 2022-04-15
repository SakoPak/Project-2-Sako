// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events.js')
const dogEvents = require('./dogAuth/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-in-container').hide()

  $('#signUp').on('submit', authEvents.onSignUp)
  $('#signIn').on('submit', authEvents.onSignIn)
  $('#signOut').on('click', authEvents.onSignOut)
  $('#changePassword').on('submit', authEvents.onChangePassword)
  $('#createProfile').on('submit', dogEvents.onCreateProfile)
  $('#create-profile-message').on('submit', dogEvents.onCreateProfile)
  $('#all-profiles').on('click', dogEvents.onIndexProfiles)
  // $('.update-profile-list').hide()
  $('.update-profile-list').on('click', dogEvents.onDeleteProfile)
  $('.delete-profile').on('click', dogEvents.onUpdateProfile)
})

// $('#view-profile').on('click', dogEvents.onViewProfile)
