#!/bin/bash
# sh curl-scripts/user/sign-out.sh

TOKEN="bc739d6ffef993f1a1c759731b607a5d"

API="http://localhost:4741"
URL_PATH="/sign-out"

curl "${API}${URL_PATH}/" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
