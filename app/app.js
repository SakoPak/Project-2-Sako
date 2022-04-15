// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events.js')
const dogEvents = require('./dogAuth/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-in-container').hide()
  $('#go-to-sign-in').on('click', authEvents.onShowSignIn)
  $('#home-page').hide()
  $('#update-form').hide()
  $('#all-profiles-page').hide()
  $('#sign-out-pwForm').hide()
  $('#passwordForm').hide()
  $('#passwordFormBtn').hide()
  $('#go-homeBtn').hide()

  $('#go-to-add-profile').on('click', authEvents.onShowUpdateForm)
  $('#go-to-all-profiles').on('click', authEvents.onShowAllProfiles)
  $('#passwordFormBtn').on('click', authEvents.onShowPWForm)
  $('#go-homeBtn').on('click', authEvents.onShowHomePage)

  $('#signUp').on('submit', authEvents.onSignUp)
  $('#signIn').on('submit', authEvents.onSignIn)
  $('#signOut').on('click', authEvents.onSignOut)
  $('#changePassword').on('submit', authEvents.onChangePassword)
  $('#createProfile').on('submit', dogEvents.onCreateProfile)
  $('#create-profile-message').on('submit', dogEvents.onCreateProfile)
  $('#all-profiles').on('click', dogEvents.onIndexProfiles)
  $('#view-all-profiles').on('submit', '.update-profile-list', dogEvents.onUpdateProfile)
  $('#view-all-profiles').on('click', '.delete-profile',
    dogEvents.onDeleteProfile
  )

  // $('.update-profile-list').hide()
  // $('.update-button').on('submit', dogEvents.onUpdateProfile)
  // $('.delete-profile').on('click', dogEvents.onDeleteProfile)
})

// $('#view-profile').on('click', dogEvents.onViewProfile)
