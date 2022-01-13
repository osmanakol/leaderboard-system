#!/bin/bash

HOME=$(pwd)
#SERVICES=services/$1


#PROTO_DEST="$SERVICES"/$1/

#cd "$PROTO_DEST"

PROTO_BUILD_DEST="$HOME"/protos/build/

mkdir -p "${PROTO_BUILD_DEST}"

node_modules/.bin/grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=node_modules/.bin/protoc-gen-ts \
    --ts_out=grpc_js:"${PROTO_BUILD_DEST}" \
    --js_out=import_style=commonjs,binary:"${PROTO_BUILD_DEST}" \
    --grpc_out=grpc_js:"${PROTO_BUILD_DEST}" \
    -I ./protos \
    protos/*.proto

#ls -la $PROTO_BUILD_DEST
npm run build
npm run prod
