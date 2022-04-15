'use strict'

const store = require('../store.js')

const onCreateProfileSuccess = function () {
  $('#create-profile-message').show()
  $('#create-profile-message').html('<p>Profile has been created!</p>')
  $('form').trigger('reset')
}

const onCreateProfileFailure = function () {
  $('#error-message').text('Failure while trying to create profile.')
}

const onViewProfileSuccess = function (response) {
  console.log(response)
  const profileHtml = `
                      <div>
                        '<li>' + ${response.dog.name} + '</li>'
                        <p>${response.dog.name}</p>
                        <p>${response.dog.gender}</p>
                        <p>${response.dog.age}</p>
                        <p>${response.dog.type}</p>
                        <p>${response.dog.notes}</p>
                      </div>
                    `
  $('#view-profile').html(profileHtml)
  $('form').trigger('reset')
}

const onViewProfileFailure = function () {
  $('#error-message').text('Failure while trying to view profile.')
}

const onIndexProfileSuccess = function (response) {
  const indexProfiles = response.dog
  console.log(response)

  let profilesHtml = ''

  indexProfiles.forEach(dog => {
    profilesHtml += `
                      <div id=${dog._id}>
                    
                       <h3>Name: ${dog.name}</h3> 
                        <div>
                          <p>Gender: ${dog.gender}</p>
                          <p>Birthday: ${dog.age}</p> 
                          <p>Type: ${dog.type}</p>
                          <p>Notes: ${dog.notes}</p> 
                        </div>
                    
                      </div>

                    <section class="update-profile-list">
                    <h3>Need to update ${dog.name}'s profile? Fill out the form and click 'Update'! </h3> 
                    
                      <form class="update-profile-list" data-id=${dog._id}>
                            <input name="dog[name]" type="text" placeholder="Dog Name" required>
                            <input name="dog[age]" type="text" placeholder="00/00/00" required>
                            <input name="dog[gender]" type="text" placeholder="Gender" required>
                            <input name="dog[type]" type="text" placeholder="Labrador" required>
                            <input name="dog[notes]" type="text" placeholder="He likes to swim!" required>

                        </form>
                        <button type="submit" class="update-profile-list" data-id=${dog._id}>Update ${dog.name}'s profile </button>
                        <button class="delete-profile" data-id=${dog._id}>Delete ${dog.name}'s Profile</button>
                        
                    </section>
                        <br>
                    `
  })
  $('#view-all-profiles').html(profilesHtml)
  // $('form').trigger('reset')
  // $('form').trigger('update')
  // $('#error-message').text('')
}

const onIndexProfileFailure = function () {
  $('#error-message').text('Failure while trying to view all profiles.')
}

const onUpdateProfileSuccess = function (response) {
  $('#profile-update-message').html('Edit successful!')
  $('#view-all-profiles').html('Profiles have changed! Click "All Profiles" again to view all dog profiles.')

  $('#profile-update-message').addClass('success')
  setTimeout(() => {
    $('#profile-update-message').html('')
    $('#profile-update-message').removeClass('success')
  }, 5000)

  $('form').trigger('reset')
}

const onUpdateProfileFailure = function () {
  $('#error-message').text('Failure while trying to update profile.')
}

const onDeleteSuccess = function () {
  $('#profile-delete-message').html('Profile successfully deleted.')
  $('#view-all-profiles').html('Profiles have changed! Click "All Profiles" again to view all dog profiles.')
  $('#profile-delete-message').addClass('success')

  setTimeout(() => {
    $('#profile-delete-message').html('')
    $('#profile-delete-message').removeClass('success')
  }, 5000)

  $('form').trigger('reset')
}

module.exports = {
  onCreateProfileSuccess,
  onCreateProfileFailure,
  onIndexProfileSuccess,
  onIndexProfileFailure,
  onViewProfileSuccess,
  onViewProfileFailure,
  onUpdateProfileSuccess,
  onUpdateProfileFailure,
  onDeleteSuccess
}
