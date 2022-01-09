#!/bin/bash
if [ -f "/home/countries.json" ]; then
    FILE="/home/countries.json"
elif [ -f "./countries.json" ]; then
    FILE="./countries.json"
else
    echo "Countries data file not found. Make sure container has a countries.json file to correct location"
#    exit 1
fi

mongo --eval "db.auth('$MONGO_INITDB_ROOT_USERNAME', '$MONGO_INITDB_ROOT_PASSWORD'); db = db.getSiblingDB('$DB_NAME'); db.createUser({ user: '$DB_USER', pwd: '$DB_PASSWORD', roles: [{ role: 'readWrite', db: '$DB_NAME' }] });"

mongoimport --host "localhost:27017" \
    --authenticationDatabase "$DB_NAME" \
    --username "$DB_USER" --password "$DB_PASSWORD" \
    --db "$DB_NAME" \
    --collection "countries" \
    --file "$FILE" --jsonArray