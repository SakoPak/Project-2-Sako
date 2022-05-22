#!/bin/bash
# sh curl-scripts/dogProfiles/create-profile.sh

API="https://cryptic-shore-49973.herokuapp.com"
URL_PATH="/dogProfiles"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "dog":{
      "name": "'"${NAME}"'",
      "age": "'"${AGE}"'",
      "gender": "'"${GENDER}"'",
      "type": "'"${TYPE}"'",
      "notes": "'"${NOTES}"'"
      }
  }'

echo
