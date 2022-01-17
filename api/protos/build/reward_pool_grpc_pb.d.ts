// package: reward.service
// file: reward_pool.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as reward_pool_pb from "./reward_pool_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IRewardPoolService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getTotalMoneyViaPeriod: IRewardPoolService_IGetTotalMoneyViaPeriod;
    addPool: IRewardPoolService_IAddPool;
}

interface IRewardPoolService_IGetTotalMoneyViaPeriod extends grpc.MethodDefinition<reward_pool_pb.PeriodId, reward_pool_pb.Money> {
    path: "/reward.service.RewardPool/GetTotalMoneyViaPeriod";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<reward_pool_pb.PeriodId>;
    requestDeserialize: grpc.deserialize<reward_pool_pb.PeriodId>;
    responseSerialize: grpc.serialize<reward_pool_pb.Money>;
    responseDeserialize: grpc.deserialize<reward_pool_pb.Money>;
}
interface IRewardPoolService_IAddPool extends grpc.MethodDefinition<reward_pool_pb.Pool, google_protobuf_empty_pb.Empty> {
    path: "/reward.service.RewardPool/AddPool";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<reward_pool_pb.Pool>;
    requestDeserialize: grpc.deserialize<reward_pool_pb.Pool>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const RewardPoolService: IRewardPoolService;

export interface IRewardPoolServer extends grpc.UntypedServiceImplementation {
    getTotalMoneyViaPeriod: grpc.handleUnaryCall<reward_pool_pb.PeriodId, reward_pool_pb.Money>;
    addPool: grpc.handleUnaryCall<reward_pool_pb.Pool, google_protobuf_empty_pb.Empty>;
}

export interface IRewardPoolClient {
    getTotalMoneyViaPeriod(request: reward_pool_pb.PeriodId, callback: (error: grpc.ServiceError | null, response: reward_pool_pb.Money) => void): grpc.ClientUnaryCall;
    getTotalMoneyViaPeriod(request: reward_pool_pb.PeriodId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: reward_pool_pb.Money) => void): grpc.ClientUnaryCall;
    getTotalMoneyViaPeriod(request: reward_pool_pb.PeriodId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: reward_pool_pb.Money) => void): grpc.ClientUnaryCall;
    addPool(request: reward_pool_pb.Pool, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    addPool(request: reward_pool_pb.Pool, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    addPool(request: reward_pool_pb.Pool, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class RewardPoolClient extends grpc.Client implements IRewardPoolClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getTotalMoneyViaPeriod(request: reward_pool_pb.PeriodId, callback: (error: grpc.ServiceError | null, response: reward_pool_pb.Money) => void): grpc.ClientUnaryCall;
    public getTotalMoneyViaPeriod(request: reward_pool_pb.PeriodId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: reward_pool_pb.Money) => void): grpc.ClientUnaryCall;
    public getTotalMoneyViaPeriod(request: reward_pool_pb.PeriodId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: reward_pool_pb.Money) => void): grpc.ClientUnaryCall;
    public addPool(request: reward_pool_pb.Pool, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public addPool(request: reward_pool_pb.Pool, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public addPool(request: reward_pool_pb.Pool, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
