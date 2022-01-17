// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var period_service_pb = require('./period_service_pb.js');
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

function serialize_period_service_GetPeriodViaFinishTimes(arg) {
  if (!(arg instanceof period_service_pb.GetPeriodViaFinishTimes)) {
    throw new Error('Expected argument of type period.service.GetPeriodViaFinishTimes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_period_service_GetPeriodViaFinishTimes(buffer_arg) {
  return period_service_pb.GetPeriodViaFinishTimes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_period_service_GetPeriodViaStartTimes(arg) {
  if (!(arg instanceof period_service_pb.GetPeriodViaStartTimes)) {
    throw new Error('Expected argument of type period.service.GetPeriodViaStartTimes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_period_service_GetPeriodViaStartTimes(buffer_arg) {
  return period_service_pb.GetPeriodViaStartTimes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_period_service_PeriodObj(arg) {
  if (!(arg instanceof period_service_pb.PeriodObj)) {
    throw new Error('Expected argument of type period.service.PeriodObj');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_period_service_PeriodObj(buffer_arg) {
  return period_service_pb.PeriodObj.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_period_service_Periods(arg) {
  if (!(arg instanceof period_service_pb.Periods)) {
    throw new Error('Expected argument of type period.service.Periods');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_period_service_Periods(buffer_arg) {
  return period_service_pb.Periods.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_period_service_PeriodsReply(arg) {
  if (!(arg instanceof period_service_pb.PeriodsReply)) {
    throw new Error('Expected argument of type period.service.PeriodsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_period_service_PeriodsReply(buffer_arg) {
  return period_service_pb.PeriodsReply.deserializeBinary(new Uint8Array(buffer_arg));
}


var PeriodService = exports.PeriodService = {
  addPeriod: {
    path: '/period.service.Period/AddPeriod',
    requestStream: false,
    responseStream: false,
    requestType: period_service_pb.PeriodObj,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_period_service_PeriodObj,
    requestDeserialize: deserialize_period_service_PeriodObj,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getPeriods: {
    path: '/period.service.Period/GetPeriods',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: period_service_pb.Periods,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_period_service_Periods,
    responseDeserialize: deserialize_period_service_Periods,
  },
  getPeriodViaStartTime: {
    path: '/period.service.Period/GetPeriodViaStartTime',
    requestStream: false,
    responseStream: false,
    requestType: period_service_pb.GetPeriodViaStartTimes,
    responseType: period_service_pb.Periods,
    requestSerialize: serialize_period_service_GetPeriodViaStartTimes,
    requestDeserialize: deserialize_period_service_GetPeriodViaStartTimes,
    responseSerialize: serialize_period_service_Periods,
    responseDeserialize: deserialize_period_service_Periods,
  },
  getPeriodViaFinishTime: {
    path: '/period.service.Period/GetPeriodViaFinishTime',
    requestStream: false,
    responseStream: false,
    requestType: period_service_pb.GetPeriodViaFinishTimes,
    responseType: period_service_pb.Periods,
    requestSerialize: serialize_period_service_GetPeriodViaFinishTimes,
    requestDeserialize: deserialize_period_service_GetPeriodViaFinishTimes,
    responseSerialize: serialize_period_service_Periods,
    responseDeserialize: deserialize_period_service_Periods,
  },
  getActivePeriod: {
    path: '/period.service.Period/GetActivePeriod',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: period_service_pb.PeriodsReply,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_period_service_PeriodsReply,
    responseDeserialize: deserialize_period_service_PeriodsReply,
  },
};

exports.PeriodClient = grpc.makeGenericClientConstructor(PeriodService);
