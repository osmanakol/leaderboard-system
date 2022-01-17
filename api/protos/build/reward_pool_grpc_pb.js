// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var reward_pool_pb = require('./reward_pool_pb.js');
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

function serialize_reward_service_Money(arg) {
  if (!(arg instanceof reward_pool_pb.Money)) {
    throw new Error('Expected argument of type reward.service.Money');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_reward_service_Money(buffer_arg) {
  return reward_pool_pb.Money.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_reward_service_PeriodId(arg) {
  if (!(arg instanceof reward_pool_pb.PeriodId)) {
    throw new Error('Expected argument of type reward.service.PeriodId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_reward_service_PeriodId(buffer_arg) {
  return reward_pool_pb.PeriodId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_reward_service_Pool(arg) {
  if (!(arg instanceof reward_pool_pb.Pool)) {
    throw new Error('Expected argument of type reward.service.Pool');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_reward_service_Pool(buffer_arg) {
  return reward_pool_pb.Pool.deserializeBinary(new Uint8Array(buffer_arg));
}


var RewardPoolService = exports.RewardPoolService = {
  getTotalMoneyViaPeriod: {
    path: '/reward.service.RewardPool/GetTotalMoneyViaPeriod',
    requestStream: false,
    responseStream: false,
    requestType: reward_pool_pb.PeriodId,
    responseType: reward_pool_pb.Money,
    requestSerialize: serialize_reward_service_PeriodId,
    requestDeserialize: deserialize_reward_service_PeriodId,
    responseSerialize: serialize_reward_service_Money,
    responseDeserialize: deserialize_reward_service_Money,
  },
  addPool: {
    path: '/reward.service.RewardPool/AddPool',
    requestStream: false,
    responseStream: false,
    requestType: reward_pool_pb.Pool,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_reward_service_Pool,
    requestDeserialize: deserialize_reward_service_Pool,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.RewardPoolClient = grpc.makeGenericClientConstructor(RewardPoolService);
