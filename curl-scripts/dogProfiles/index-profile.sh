#!/bin/sh
# sh curl-scripts/dogProfile/index-profile.sh

API="http://localhost:4741"
URL_PATH="/dogProfiles"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  
echo
