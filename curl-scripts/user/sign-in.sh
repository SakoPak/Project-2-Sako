#!/bin/bash
# sh curl-scripts/user/sign-in.sh

EMAIL="sako@angel.com"
PASSWORD="hope"


API="https://cryptic-shore-49973.herokuapp.com"
URL_PATH="/sign-in"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo