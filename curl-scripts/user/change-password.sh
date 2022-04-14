#!/bin/bash
# sh curl-scripts/user/change-password.sh

OLDPW="hi"
NEWPW="goodbye"
TOKEN="8d42a2ac7d5a0357e68104a5a24829e9"


API="http://localhost:4741"
URL_PATH="/change-password"

curl "${API}${URL_PATH}/" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

echo