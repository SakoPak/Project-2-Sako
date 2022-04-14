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
  const profileHtml = `
                      <div>
                        '<li>' + ${dog.name} + '</li>'
                        <p>${dog.name}</p>
                        <p>${dog.gender}</p>
                        <p>${dog.age}</p>
                        <p>${dog.type}</p>
                        <p>${dog.notes}</p>
                      </div>
                    `
  $('#view-profile').html(profileHtml)
  $('form').trigger('reset')
}

const onViewProfileFailure = function () {
  $('#error-message').text('Failure while trying to view profile.')
}

const onIndexProfileSuccess = function (response) {
  let profilesHtml = ''

  response.dogProfiles.forEach((book) => {
    // booksHtml += '<li>' + book.title + '</li>'
    // booksHtml = booksHtml + '<li>' + book.title + '</li>'

    profilesHtml += `
                      <div>
                      <h3>${dog.name}</h3>
                      '<li>' + ${dog.name} + '</li>'
                        <p>${dog.name}</p>
                        <p>${dog.gender}</p>
                        <p>${dog.age}</p>
                        <p>${dog.type}</p>
                        <p>${dog.notes}</p>
                      </div>
                      <button class="delete-profile" data-id=${dog._id}>Delete Profile</button>
                        <button class="edit-profile" data-id=${dog._id}>Edit Profile</button>
                        
                    `
  })
  $('#profiles-display').html(profilesHtml)
  $('form').trigger('reset')
  $('form').trigger('update')
  $('#error-message').text('')
}

const onUpdateProfileSuccess = function () {
  const bookHtml = `
    <div>
        <form class="update-book-list" data-id=${dog._id}>
                            <input name="book[title]" type="text" placeholder="Book Title">
                            <input name="book[author]" type="text" placeholder="Book Author">
                            <button type="submit">Update book</button>
                        </form>
       </div>
    `
  $('form').trigger('reset')
}
$('#books-display').html('Success. Book updated!')

const onUpdateProfileFailure = function () {
  $('#error-message').text('Failure while trying to update book')
}

module.exports = {
  onCreateProfileSuccess,
  onCreateProfileFailure,
  onIndexProfileSuccess,
  onViewProfileSuccess,
  onViewProfileFailure,
  onUpdateProfileSuccess,
  onUpdateProfileFailure
}
