#!/bin/sh
# sh curl-scripts/dogProfile/show-profile.sh

# TOKEN="bc739d6ffef993f1a1c759731b607a5d"

API="https://cryptic-shore-49973.herokuapp.com"
URL_PATH="/dogProfiles"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo