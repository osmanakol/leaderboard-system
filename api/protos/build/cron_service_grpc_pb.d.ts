// package: cron.service
// file: cron_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as cron_service_pb from "./cron_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface ICronService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setCron: ICronService_IsetCron;
}

interface ICronService_IsetCron extends grpc.MethodDefinition<cron_service_pb.PeriodCron, google_protobuf_empty_pb.Empty> {
    path: "/cron.service.Cron/setCron";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<cron_service_pb.PeriodCron>;
    requestDeserialize: grpc.deserialize<cron_service_pb.PeriodCron>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const CronService: ICronService;

export interface ICronServer extends grpc.UntypedServiceImplementation {
    setCron: grpc.handleUnaryCall<cron_service_pb.PeriodCron, google_protobuf_empty_pb.Empty>;
}

export interface ICronClient {
    setCron(request: cron_service_pb.PeriodCron, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setCron(request: cron_service_pb.PeriodCron, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setCron(request: cron_service_pb.PeriodCron, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class CronClient extends grpc.Client implements ICronClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public setCron(request: cron_service_pb.PeriodCron, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setCron(request: cron_service_pb.PeriodCron, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setCron(request: cron_service_pb.PeriodCron, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
