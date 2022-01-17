// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var cron_service_pb = require('./cron_service_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_cron_service_PeriodCron(arg) {
  if (!(arg instanceof cron_service_pb.PeriodCron)) {
    throw new Error('Expected argument of type cron.service.PeriodCron');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cron_service_PeriodCron(buffer_arg) {
  return cron_service_pb.PeriodCron.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var CronService = exports.CronService = {
  setCron: {
    path: '/cron.service.Cron/setCron',
    requestStream: false,
    responseStream: false,
    requestType: cron_service_pb.PeriodCron,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_cron_service_PeriodCron,
    requestDeserialize: deserialize_cron_service_PeriodCron,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.CronClient = grpc.makeGenericClientConstructor(CronService);
