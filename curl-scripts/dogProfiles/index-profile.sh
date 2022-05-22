#!/bin/sh
# sh curl-scripts/dogProfile/index-profile.sh

API="https://cryptic-shore-49973.herokuapp.com"
URL_PATH="/dogProfiles"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  
echo
