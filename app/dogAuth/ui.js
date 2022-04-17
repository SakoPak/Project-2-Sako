'use strict'

const store = require('../store.js')
const dogEvents = require('./events.js')

const onCreateProfileSuccess = function () {
  $('.create-profile-message').show()
  $('.create-profile-message').html('<p>Profile has been created!</p>')
  $('form').trigger('reset')
}

const onCreateProfileFailure = function () {
  $('#error-message').text('Failure while trying to create profile.')
}

const onViewProfileSuccess = function (response) {
  console.log(response)
  const profileHtml = `
                     <div class="row d-flex justify-content-center">
                          <div class="col-md-10 col-xl-8 text-center">
                            <h3 class="mb-4"></h3>
                            <p class="mb-4 pb-2 mb-md-5 pb-md-0">
                            </p>
                          </div>
                        </div>
                        <div class="row text-center">
                          <div class="col-md-4 mb-5 mb-md-0">
                            <div class="card testimonial-card">
                              <div class="card-up" style="background-color: rgb(33, 158, 188);"></div>
                              <div class="avatar mx-auto bg-white">
                                <img src="../images/Dog.png" class="rounded-circle img-fluid" />
                              </div>

                              <div class="card-body">

                              <form id="viewProfile">
                                <h4 class="mb-4"></h4>
                                <hr/>

                                <p class="text-dark-grey mt-4">

                                  <div id=${response.dog._id}>

                                      <h4 class="mb-4">Name: ${response.dog.name}</h4> 
                                      <hr />
                                      <p class="dark-grey-text mt-4">
                                        <div>
                                          <p>Gender: ${response.dog.gender}</p>
                                          <p>Birthday: ${response.dog.age}</p> 
                                          <p>Type: ${response.dog.type}</p>
                                          <p>Notes: ${response.dog.notes}</p> 
                                        </div>
                                      </p>      
                                  </div>
                                    <br>
                                      <div class="card-footer">
                                      <small class="text-muted"></small>
                                      </div>
                                </p>
                              </form>
                              
                            </div>
                          </div>
                        </div>
                    `
  $('#view-profile').html(profileHtml)
  $('form').trigger('reset')
}

const onViewProfileFailure = function () {
  $('#error-message').text('Failure while trying to view profile.')
}

const onIndexProfileSuccess = function (response) {
  $('#all-profiles-page').show()
  $('#create-form').hide()
  const indexProfiles = response.dog
  console.log(response)

  let profilesHtml = ''

  indexProfiles.forEach(dog => {
    profilesHtml += `
                    <div class="text-center justify-content-center text-grey bg-dark">
                       <div class="row d-flex justify-content-center">
                          <div class="col-md-10 col-xl-8 text-center">
                            <h3 class="mb-4"></h3>
                            <p class="mb-4 pb-2 mb-md-5 pb-md-0">
                            </p>
                          </div>
                        </div>
                        <div class="row text-center">
                          <div class="col-md-4 mb-5 mb-md-0">
                            <div class="card testimonial-card">
                              <div class="card-up" style="background-color: #E9B8AA;"></div>
                              <div class="avatar mx-auto bg-white">
                                <img src="../images/Dog.png" class="rounded-circle img-fluid" />
                              </div>

                              <div class="card-body text-dark">

                              <form class="viewProfiles">
                                <h4 class="mb-4">${dog.name}</h4>
                                <hr/>

                                <p class="dark-grey-text mt-4">

                                  <div id=${dog._id}>
                            
                                     
                                        <div>
                                          <p>Gender: ${dog.gender}</p>
                                          <p>Birthday: ${dog.age}</p> 
                                          <p>Type: ${dog.type}</p>
                                          <p>Notes: ${dog.notes}</p> 
                                        </div>
                                  
                                    </div>
                                    <br>
                                     
                                      
                                  
                                    </div>
                                    </p>
                                  </form>
                              <p class="create-profile-message"></p>
                            </div>
                          </div>
                        </div>
                      </div>
      
                      <!-- UPDATE PROFILE FORM -->
                    <section class="update-profile-list">

                     <div class="row d-flex justify-content-center">
                          <div class="col-md-10 col-xl-8 text-center">
                            <h3 class="mb-4"></h3>
                            <p class="mb-4 pb-2 mb-md-5 pb-md-0"></p>                         
                          </div>
                      </div>
                        <div class="row text-center">
                          <div class="col-md-4 mb-5 mb-md-0"> 
                            <div class="card testimonial-card">
                              <div class="card-up" style="background-color:#5A95F3;"></div>
                              <div class="avatar mx-auto bg-white">
                                <img src="../images/Dog.png" class="rounded-circle img-fluid" />
                              </div>
                              <div class="card-body">

                            <form class="update-profile-list" data-id=${dog._id}>

                                <hr/>

                                <p class="dark-grey-text mt-4"></p>

                                  <div id=${dog._id}>
                            
                                      <input name="dog[name]" type="text" placeholder="Dog Name" required>
                                      <input name="dog[age]" type="text" placeholder="00/00/00" required>
                                      <input name="dog[gender]" type="text" placeholder="Gender" required>
                                      <input name="dog[type]" type="text" placeholder="Labrador" required>
                                      <textarea name="dog[notes]" type="text" placeholder="Notes"></textarea>
                                    <button type="submit" class="update-button btn btn-outline-secondary" style="background-color:#5A95F3" data-id=${dog._id}>Update ${dog.name}'s profile </button>
                      
                              </form>
                              <button class="delete-profile btn btn-outline-secondary" style="background-color:#5A95F3" data-id=${dog._id}>Delete ${dog.name}'s Profile</button>

                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </section>

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
  $('#view-all-profiles').html('Profiles updated! Click "All Profiles" again to view all dog profiles.')

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

const onDeleteProfileSuccess = function () {
  $('#profile-delete-message').html('Profile successfully deleted.')
  $('#view-all-profiles').html(
    'Profiles have changed! Click "All Profiles" again to view all dog profiles.'
  )
  $('#profile-delete-message').addClass('success')

  setTimeout(() => {
    $('#profile-delete-message').html('')
    $('#profile-delete-message').removeClass('success')
  }, 5000)

  $('form').trigger('reset')
}

const onDeleteProfileFailure = function () {
  $('#error-message').text('Failure while trying to delete profile.')
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
  onDeleteProfileSuccess,
  onDeleteProfileFailure
}
