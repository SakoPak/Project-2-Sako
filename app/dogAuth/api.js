
const createProfile = function (data) {
  console.log(data)
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:4741/dogProfiles',
    data: data
  })
}


const indexProfiles = function () {
  return $.ajax({
    method: 'GET',
    url: 'http://localhost:4741/dogProfiles'
  })
}




module.exports = {
  createProfile,
  indexProfiles

}
