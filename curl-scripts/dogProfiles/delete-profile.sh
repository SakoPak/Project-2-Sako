#!/bin/bash
# sh curl-scripts/dogProfile/delete-profile.sh

API="https://cryptic-shore-49973.herokuapp.com"
URL_PATH="/dogProfiles"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo