// package: rank.service
// file: rank_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as rank_service_pb from "./rank_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IRankService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    updatePlayerRank: IRankService_IupdatePlayerRank;
    changePeriod: IRankService_IchangePeriod;
    pubRank: IRankService_IpubRank;
}

interface IRankService_IupdatePlayerRank extends grpc.MethodDefinition<rank_service_pb.UpdatePlayerRankReq, google_protobuf_empty_pb.Empty> {
    path: "/rank.service.Rank/updatePlayerRank";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<rank_service_pb.UpdatePlayerRankReq>;
    requestDeserialize: grpc.deserialize<rank_service_pb.UpdatePlayerRankReq>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IRankService_IchangePeriod extends grpc.MethodDefinition<rank_service_pb.changePeriodReq, google_protobuf_empty_pb.Empty> {
    path: "/rank.service.Rank/changePeriod";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<rank_service_pb.changePeriodReq>;
    requestDeserialize: grpc.deserialize<rank_service_pb.changePeriodReq>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IRankService_IpubRank extends grpc.MethodDefinition<rank_service_pb.PeriodIdRank, google_protobuf_empty_pb.Empty> {
    path: "/rank.service.Rank/pubRank";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<rank_service_pb.PeriodIdRank>;
    requestDeserialize: grpc.deserialize<rank_service_pb.PeriodIdRank>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const RankService: IRankService;

export interface IRankServer extends grpc.UntypedServiceImplementation {
    updatePlayerRank: grpc.handleClientStreamingCall<rank_service_pb.UpdatePlayerRankReq, google_protobuf_empty_pb.Empty>;
    changePeriod: grpc.handleUnaryCall<rank_service_pb.changePeriodReq, google_protobuf_empty_pb.Empty>;
    pubRank: grpc.handleUnaryCall<rank_service_pb.PeriodIdRank, google_protobuf_empty_pb.Empty>;
}

export interface IRankClient {
    updatePlayerRank(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<rank_service_pb.UpdatePlayerRankReq>;
    updatePlayerRank(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<rank_service_pb.UpdatePlayerRankReq>;
    updatePlayerRank(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<rank_service_pb.UpdatePlayerRankReq>;
    updatePlayerRank(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<rank_service_pb.UpdatePlayerRankReq>;
    changePeriod(request: rank_service_pb.changePeriodReq, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    changePeriod(request: rank_service_pb.changePeriodReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    changePeriod(request: rank_service_pb.changePeriodReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    pubRank(request: rank_service_pb.PeriodIdRank, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    pubRank(request: rank_service_pb.PeriodIdRank, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    pubRank(request: rank_service_pb.PeriodIdRank, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class RankClient extends grpc.Client implements IRankClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public updatePlayerRank(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<rank_service_pb.UpdatePlayerRankReq>;
    public updatePlayerRank(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<rank_service_pb.UpdatePlayerRankReq>;
    public updatePlayerRank(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<rank_service_pb.UpdatePlayerRankReq>;
    public updatePlayerRank(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<rank_service_pb.UpdatePlayerRankReq>;
    public changePeriod(request: rank_service_pb.changePeriodReq, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public changePeriod(request: rank_service_pb.changePeriodReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public changePeriod(request: rank_service_pb.changePeriodReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public pubRank(request: rank_service_pb.PeriodIdRank, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public pubRank(request: rank_service_pb.PeriodIdRank, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public pubRank(request: rank_service_pb.PeriodIdRank, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
