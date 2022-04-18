#!/bin/bash
# sh curl-scripts/user/sign-out.sh

TOKEN="bc739d6ffef993f1a1c759731b607a5d"

API="https://cryptic-shore-49973.herokuapp.com"
URL_PATH="/sign-out"

curl "${API}${URL_PATH}/" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
