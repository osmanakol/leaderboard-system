#!/bin/bash
if [ -f "countries.json" ]; then
    FILE="countries.json"
elif [ -f "./countries.json" ]; then
    FILE="./countries.json"
else
    echo "Countries data file not found. Make sure container has a countries.json file to correct location"
    exit 1
fi

mongo -u "$MONGO_INITDB_ROOT_USERNAME" -p "$MONGO_INITDB_ROOT_PASSWORD" << EOF
db=db.getSiblingDB('$MONGO_INITDB_DATABASE');
use $MONGO_INITDB_DATABASE;
db.createUser({
  user:  '$MONGODB_APPLICATION_USER',
  pwd: '$MONGODB_APPLICATION_PASS',
  roles: [{
    role: 'readWrite',
    db: '$MONGO_INITDB_DATABASE'
  }]
});
EOF


mongoimport --host "$MONGO_HOST_NAME" \
    --authenticationDatabase "$MONGO_INITDB_DATABASE" \
    --username "$MONGODB_APPLICATION_USER" --password "$MONGODB_APPLICATION_PASS" \
    --db "$MONGO_INITDB_DATABASE" \
    --collection "countries" \
    --file "$FILE" --jsonArray