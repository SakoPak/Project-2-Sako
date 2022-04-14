#!/bin/bash
# sh curl-scripts/dogProfile/delete-profile.sh

TOKEN="1fc71b8ed525c6a0dddf7cadeef9eea4"
ID="6255d6a4cd761170534ce41c"

API="http://localhost:4741"
URL_PATH="/dogProfiles"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo