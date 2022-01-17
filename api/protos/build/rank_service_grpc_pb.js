// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var rank_service_pb = require('./rank_service_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rank_service_PeriodIdRank(arg) {
  if (!(arg instanceof rank_service_pb.PeriodIdRank)) {
    throw new Error('Expected argument of type rank.service.PeriodIdRank');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rank_service_PeriodIdRank(buffer_arg) {
  return rank_service_pb.PeriodIdRank.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rank_service_UpdatePlayerRankReq(arg) {
  if (!(arg instanceof rank_service_pb.UpdatePlayerRankReq)) {
    throw new Error('Expected argument of type rank.service.UpdatePlayerRankReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rank_service_UpdatePlayerRankReq(buffer_arg) {
  return rank_service_pb.UpdatePlayerRankReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rank_service_changePeriodReq(arg) {
  if (!(arg instanceof rank_service_pb.changePeriodReq)) {
    throw new Error('Expected argument of type rank.service.changePeriodReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rank_service_changePeriodReq(buffer_arg) {
  return rank_service_pb.changePeriodReq.deserializeBinary(new Uint8Array(buffer_arg));
}


var RankService = exports.RankService = {
  updatePlayerRank: {
    path: '/rank.service.Rank/updatePlayerRank',
    requestStream: true,
    responseStream: false,
    requestType: rank_service_pb.UpdatePlayerRankReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_rank_service_UpdatePlayerRankReq,
    requestDeserialize: deserialize_rank_service_UpdatePlayerRankReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  changePeriod: {
    path: '/rank.service.Rank/changePeriod',
    requestStream: false,
    responseStream: false,
    requestType: rank_service_pb.changePeriodReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_rank_service_changePeriodReq,
    requestDeserialize: deserialize_rank_service_changePeriodReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  pubRank: {
    path: '/rank.service.Rank/pubRank',
    requestStream: false,
    responseStream: false,
    requestType: rank_service_pb.PeriodIdRank,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_rank_service_PeriodIdRank,
    requestDeserialize: deserialize_rank_service_PeriodIdRank,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // option (google.api.http) = {
// post: "/rank-update",
// body: "*"
// };
};

exports.RankClient = grpc.makeGenericClientConstructor(RankService);
