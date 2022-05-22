'use strict'

const config = require('./../config')
const store = require('../store.js')

const createProfile = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/dogProfiles',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const indexProfiles = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/dogProfiles',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const viewProfile = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/dogProfiles/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateProfile = function (id, formData) {
  return $.ajax({
    url: config.apiUrl + '/dogProfiles/' + id,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteProfile = function (id) {
  return $.ajax({
    url: config.apiUrl + '/dogProfiles/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createProfile,
  indexProfiles,
  viewProfile,
  updateProfile,
  deleteProfile
}
