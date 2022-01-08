#!/bin/bash
SERVICES=$(pwd)/services/


PROTO_DEST="$SERVICES"/$1/

cd "$PROTO_DEST"

PROTO_BUILD_DEST="$SERVICES"/$2/protos/build/$1/

mkdir -p "${PROTO_BUILD_DEST}"

grpc_tools_node_protoc \
    --plugin=protoc-gen-ts="$PROTO_DEST"/node_modules/.bin/protoc-gen-ts \
    --ts_out=grpc_js:"${PROTO_BUILD_DEST}" \
    --js_out=import_style=commonjs,binary:"${PROTO_BUILD_DEST}" \
    --grpc_out=grpc_js:"${PROTO_BUILD_DEST}" \
    -I ./protos \
    protos/*.proto