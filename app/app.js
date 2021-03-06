// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events.js')
const dogEvents = require('./dogAuth/events.js')

$(() => {
  $('#sign-up-container').hide()
  $('#sign-in-container').hide()
  $('#sign-out-again').hide()
  $('#go-to-sign-in2').on('click', authEvents.onShowSignIn)
  $('#signUpBtn').on('click', authEvents.onShowSignUp)

  $('#home-page').hide()
  $('#create-form').hide()
  $('#all-profiles-page').hide()
  $('#sign-out-pwForm').hide()
  $('#passwordForm').hide()
  $('#passwordFormBtn').hide()
  $('#go-homeBtn').hide()
  $('.update-profile-list').hide()

  $('#go-to-add-profile').on('click', authEvents.onShowUpdateForm)
  $('#go-to-all-profiles').on('click', authEvents.onShowAllProfiles)
  $('#passwordFormBtn').on('click', authEvents.onShowPWForm)
  $('#go-homeBtn').on('click', authEvents.onShowHomePage)

  $('#signUp').on('submit', authEvents.onSignUp)
  $('#signIn').on('submit', authEvents.onSignIn)
  $('#signOut').on('click', authEvents.onSignOut)
  $('#changePassword').on('submit', authEvents.onChangePassword)
  $('#createProfile').on('submit', dogEvents.onCreateProfile)
  $('.create-profile-message').on('submit', dogEvents.onCreateProfile)
  $('#all-profiles').on('click', dogEvents.onIndexProfiles)
  $('#view-all-profiles').on(
    'submit',
    '.viewProfiles',
    authEvents.onShowUpdateForm
  )
  $('#view-all-profiles').on('click', '.delete-profile',
    dogEvents.onDeleteProfile)
  $('.update-profile-list').on('submit', dogEvents.onUpdateProfile)

  $('#sign-out-again').on('click', authEvents.onSignOutAgain)
  $('#all-profiles').on('click', dogEvents.onHideUpdateForm)
})

