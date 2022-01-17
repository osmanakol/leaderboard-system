// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var stats_service_pb = require('./stats_service_pb.js');
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

function serialize_stats_service_PeriodIdReq(arg) {
  if (!(arg instanceof stats_service_pb.PeriodIdReq)) {
    throw new Error('Expected argument of type stats.service.PeriodIdReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stats_service_PeriodIdReq(buffer_arg) {
  return stats_service_pb.PeriodIdReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stats_service_Stat(arg) {
  if (!(arg instanceof stats_service_pb.Stat)) {
    throw new Error('Expected argument of type stats.service.Stat');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stats_service_Stat(buffer_arg) {
  return stats_service_pb.Stat.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stats_service_StatReply(arg) {
  if (!(arg instanceof stats_service_pb.StatReply)) {
    throw new Error('Expected argument of type stats.service.StatReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stats_service_StatReply(buffer_arg) {
  return stats_service_pb.StatReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stats_service_StatsViaPeriodReply(arg) {
  if (!(arg instanceof stats_service_pb.StatsViaPeriodReply)) {
    throw new Error('Expected argument of type stats.service.StatsViaPeriodReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stats_service_StatsViaPeriodReply(buffer_arg) {
  return stats_service_pb.StatsViaPeriodReply.deserializeBinary(new Uint8Array(buffer_arg));
}


var StatsService = exports.StatsService = {
  addStat: {
    path: '/stats.service.Stats/AddStat',
    requestStream: true,
    responseStream: false,
    requestType: stats_service_pb.Stat,
    responseType: stats_service_pb.StatReply,
    requestSerialize: serialize_stats_service_Stat,
    requestDeserialize: deserialize_stats_service_Stat,
    responseSerialize: serialize_stats_service_StatReply,
    responseDeserialize: deserialize_stats_service_StatReply,
  },
  statsViaActivePeriod: {
    path: '/stats.service.Stats/StatsViaActivePeriod',
    requestStream: false,
    responseStream: false,
    requestType: stats_service_pb.PeriodIdReq,
    responseType: stats_service_pb.StatsViaPeriodReply,
    requestSerialize: serialize_stats_service_PeriodIdReq,
    requestDeserialize: deserialize_stats_service_PeriodIdReq,
    responseSerialize: serialize_stats_service_StatsViaPeriodReply,
    responseDeserialize: deserialize_stats_service_StatsViaPeriodReply,
  },
  calculatePeriod: {
    path: '/stats.service.Stats/CalculatePeriod',
    requestStream: false,
    responseStream: false,
    requestType: stats_service_pb.PeriodIdReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_stats_service_PeriodIdReq,
    requestDeserialize: deserialize_stats_service_PeriodIdReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.StatsClient = grpc.makeGenericClientConstructor(StatsService);
