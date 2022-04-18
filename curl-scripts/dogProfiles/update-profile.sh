#!/bin/bash
# sh curl-scripts/dogProfile/update-profile.sh

# NAME="Snowball"
# AGE="2 years old"
# GENDER="Male"
# TYPE="Terrier"
# NOTES="Scared of cars"
# TOKEN="bc739d6ffef993f1a1c759731b607a5d"
# ID="62572824256007a90d00d269"


API="https://cryptic-shore-49973.herokuapp.com"
URL_PATH="/dogProfiles"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "dog": {
      "name": "'"${NAME}"'",
      "age": "'"${AGE}"'",
      "gender": "'"${GENDER}"'",
      "type": "'"${TYPE}"'",
      "notes": "'"${NOTES}"'"
    }
  }'

echo
