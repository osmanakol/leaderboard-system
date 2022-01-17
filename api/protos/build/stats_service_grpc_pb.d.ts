// package: stats.service
// file: stats_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as stats_service_pb from "./stats_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IStatsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addStat: IStatsService_IAddStat;
    statsViaActivePeriod: IStatsService_IStatsViaActivePeriod;
    calculatePeriod: IStatsService_ICalculatePeriod;
}

interface IStatsService_IAddStat extends grpc.MethodDefinition<stats_service_pb.Stat, stats_service_pb.StatReply> {
    path: "/stats.service.Stats/AddStat";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<stats_service_pb.Stat>;
    requestDeserialize: grpc.deserialize<stats_service_pb.Stat>;
    responseSerialize: grpc.serialize<stats_service_pb.StatReply>;
    responseDeserialize: grpc.deserialize<stats_service_pb.StatReply>;
}
interface IStatsService_IStatsViaActivePeriod extends grpc.MethodDefinition<stats_service_pb.PeriodIdReq, stats_service_pb.StatsViaPeriodReply> {
    path: "/stats.service.Stats/StatsViaActivePeriod";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stats_service_pb.PeriodIdReq>;
    requestDeserialize: grpc.deserialize<stats_service_pb.PeriodIdReq>;
    responseSerialize: grpc.serialize<stats_service_pb.StatsViaPeriodReply>;
    responseDeserialize: grpc.deserialize<stats_service_pb.StatsViaPeriodReply>;
}
interface IStatsService_ICalculatePeriod extends grpc.MethodDefinition<stats_service_pb.PeriodIdReq, google_protobuf_empty_pb.Empty> {
    path: "/stats.service.Stats/CalculatePeriod";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stats_service_pb.PeriodIdReq>;
    requestDeserialize: grpc.deserialize<stats_service_pb.PeriodIdReq>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const StatsService: IStatsService;

export interface IStatsServer extends grpc.UntypedServiceImplementation {
    addStat: grpc.handleClientStreamingCall<stats_service_pb.Stat, stats_service_pb.StatReply>;
    statsViaActivePeriod: grpc.handleUnaryCall<stats_service_pb.PeriodIdReq, stats_service_pb.StatsViaPeriodReply>;
    calculatePeriod: grpc.handleUnaryCall<stats_service_pb.PeriodIdReq, google_protobuf_empty_pb.Empty>;
}

export interface IStatsClient {
    addStat(callback: (error: grpc.ServiceError | null, response: stats_service_pb.StatReply) => void): grpc.ClientWritableStream<stats_service_pb.Stat>;
    addStat(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stats_service_pb.StatReply) => void): grpc.ClientWritableStream<stats_service_pb.Stat>;
    addStat(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stats_service_pb.StatReply) => void): grpc.ClientWritableStream<stats_service_pb.Stat>;
    addStat(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stats_service_pb.StatReply) => void): grpc.ClientWritableStream<stats_service_pb.Stat>;
    statsViaActivePeriod(request: stats_service_pb.PeriodIdReq, callback: (error: grpc.ServiceError | null, response: stats_service_pb.StatsViaPeriodReply) => void): grpc.ClientUnaryCall;
    statsViaActivePeriod(request: stats_service_pb.PeriodIdReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stats_service_pb.StatsViaPeriodReply) => void): grpc.ClientUnaryCall;
    statsViaActivePeriod(request: stats_service_pb.PeriodIdReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stats_service_pb.StatsViaPeriodReply) => void): grpc.ClientUnaryCall;
    calculatePeriod(request: stats_service_pb.PeriodIdReq, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    calculatePeriod(request: stats_service_pb.PeriodIdReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    calculatePeriod(request: stats_service_pb.PeriodIdReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class StatsClient extends grpc.Client implements IStatsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public addStat(callback: (error: grpc.ServiceError | null, response: stats_service_pb.StatReply) => void): grpc.ClientWritableStream<stats_service_pb.Stat>;
    public addStat(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stats_service_pb.StatReply) => void): grpc.ClientWritableStream<stats_service_pb.Stat>;
    public addStat(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stats_service_pb.StatReply) => void): grpc.ClientWritableStream<stats_service_pb.Stat>;
    public addStat(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stats_service_pb.StatReply) => void): grpc.ClientWritableStream<stats_service_pb.Stat>;
    public statsViaActivePeriod(request: stats_service_pb.PeriodIdReq, callback: (error: grpc.ServiceError | null, response: stats_service_pb.StatsViaPeriodReply) => void): grpc.ClientUnaryCall;
    public statsViaActivePeriod(request: stats_service_pb.PeriodIdReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stats_service_pb.StatsViaPeriodReply) => void): grpc.ClientUnaryCall;
    public statsViaActivePeriod(request: stats_service_pb.PeriodIdReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stats_service_pb.StatsViaPeriodReply) => void): grpc.ClientUnaryCall;
    public calculatePeriod(request: stats_service_pb.PeriodIdReq, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public calculatePeriod(request: stats_service_pb.PeriodIdReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public calculatePeriod(request: stats_service_pb.PeriodIdReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
