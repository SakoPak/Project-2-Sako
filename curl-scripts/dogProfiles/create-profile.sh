#!/bin/bash
# sh curl-scripts/dogProfiles/create-profile.sh

NAME="Bruno"
AGE="6 years old"
GENDER="Male"
TYPE="Boxer"
NOTES="He likes bacon."
TOKEN="bc739d6ffef993f1a1c759731b607a5d"


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
