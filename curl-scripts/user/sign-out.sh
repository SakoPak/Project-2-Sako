#!/bin/bash
# sh curl-scripts/user/sign-out.sh

API="https://cryptic-shore-49973.herokuapp.com"
URL_PATH="/sign-out"

curl "${API}${URL_PATH}/" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
