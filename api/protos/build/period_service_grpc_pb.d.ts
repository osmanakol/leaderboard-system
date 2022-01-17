// package: period.service
// file: period_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as period_service_pb from "./period_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IPeriodService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addPeriod: IPeriodService_IAddPeriod;
    getPeriods: IPeriodService_IGetPeriods;
    getPeriodViaStartTime: IPeriodService_IGetPeriodViaStartTime;
    getPeriodViaFinishTime: IPeriodService_IGetPeriodViaFinishTime;
    getActivePeriod: IPeriodService_IGetActivePeriod;
}

interface IPeriodService_IAddPeriod extends grpc.MethodDefinition<period_service_pb.PeriodObj, google_protobuf_empty_pb.Empty> {
    path: "/period.service.Period/AddPeriod";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<period_service_pb.PeriodObj>;
    requestDeserialize: grpc.deserialize<period_service_pb.PeriodObj>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IPeriodService_IGetPeriods extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, period_service_pb.Periods> {
    path: "/period.service.Period/GetPeriods";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<period_service_pb.Periods>;
    responseDeserialize: grpc.deserialize<period_service_pb.Periods>;
}
interface IPeriodService_IGetPeriodViaStartTime extends grpc.MethodDefinition<period_service_pb.GetPeriodViaStartTimes, period_service_pb.Periods> {
    path: "/period.service.Period/GetPeriodViaStartTime";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<period_service_pb.GetPeriodViaStartTimes>;
    requestDeserialize: grpc.deserialize<period_service_pb.GetPeriodViaStartTimes>;
    responseSerialize: grpc.serialize<period_service_pb.Periods>;
    responseDeserialize: grpc.deserialize<period_service_pb.Periods>;
}
interface IPeriodService_IGetPeriodViaFinishTime extends grpc.MethodDefinition<period_service_pb.GetPeriodViaFinishTimes, period_service_pb.Periods> {
    path: "/period.service.Period/GetPeriodViaFinishTime";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<period_service_pb.GetPeriodViaFinishTimes>;
    requestDeserialize: grpc.deserialize<period_service_pb.GetPeriodViaFinishTimes>;
    responseSerialize: grpc.serialize<period_service_pb.Periods>;
    responseDeserialize: grpc.deserialize<period_service_pb.Periods>;
}
interface IPeriodService_IGetActivePeriod extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, period_service_pb.PeriodsReply> {
    path: "/period.service.Period/GetActivePeriod";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<period_service_pb.PeriodsReply>;
    responseDeserialize: grpc.deserialize<period_service_pb.PeriodsReply>;
}

export const PeriodService: IPeriodService;

export interface IPeriodServer extends grpc.UntypedServiceImplementation {
    addPeriod: grpc.handleUnaryCall<period_service_pb.PeriodObj, google_protobuf_empty_pb.Empty>;
    getPeriods: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, period_service_pb.Periods>;
    getPeriodViaStartTime: grpc.handleUnaryCall<period_service_pb.GetPeriodViaStartTimes, period_service_pb.Periods>;
    getPeriodViaFinishTime: grpc.handleUnaryCall<period_service_pb.GetPeriodViaFinishTimes, period_service_pb.Periods>;
    getActivePeriod: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, period_service_pb.PeriodsReply>;
}

export interface IPeriodClient {
    addPeriod(request: period_service_pb.PeriodObj, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    addPeriod(request: period_service_pb.PeriodObj, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    addPeriod(request: period_service_pb.PeriodObj, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getPeriods(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: period_service_pb.Periods) => void): grpc.ClientUnaryCall;
    getPeriods(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: period_service_pb.Periods) => void): grpc.ClientUnaryCall;
    getPeriods(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: period_service_pb.Periods) => void): grpc.ClientUnaryCall;
    getPeriodViaStartTime(request: period_service_pb.GetPeriodViaStartTimes, callback: (error: grpc.ServiceError | null, response: period_service_pb.Periods) => void): grpc.ClientUnaryCall;
    getPeriodViaStartTime(request: period_service_pb.GetPeriodViaStartTimes, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: period_service_pb.Periods) => void): grpc.ClientUnaryCall;
    getPeriodViaStartTime(request: period_service_pb.GetPeriodViaStartTimes, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: period_service_pb.Periods) => void): grpc.ClientUnaryCall;
    getPeriodViaFinishTime(request: period_service_pb.GetPeriodViaFinishTimes, callback: (error: grpc.ServiceError | null, response: period_service_pb.Periods) => void): grpc.ClientUnaryCall;
    getPeriodViaFinishTime(request: period_service_pb.GetPeriodViaFinishTimes, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: period_service_pb.Periods) => void): grpc.ClientUnaryCall;
    getPeriodViaFinishTime(request: period_service_pb.GetPeriodViaFinishTimes, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: period_service_pb.Periods) => void): grpc.ClientUnaryCall;
    getActivePeriod(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: period_service_pb.PeriodsReply) => void): grpc.ClientUnaryCall;
    getActivePeriod(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: period_service_pb.PeriodsReply) => void): grpc.ClientUnaryCall;
    getActivePeriod(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: period_service_pb.PeriodsReply) => void): grpc.ClientUnaryCall;
}

export class PeriodClient extends grpc.Client implements IPeriodClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public addPeriod(request: period_service_pb.PeriodObj, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public addPeriod(request: period_service_pb.PeriodObj, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public addPeriod(request: period_service_pb.PeriodObj, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getPeriods(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: period_service_pb.Periods) => void): grpc.ClientUnaryCall;
    public getPeriods(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: period_service_pb.Periods) => void): grpc.ClientUnaryCall;
    public getPeriods(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: period_service_pb.Periods) => void): grpc.ClientUnaryCall;
    public getPeriodViaStartTime(request: period_service_pb.GetPeriodViaStartTimes, callback: (error: grpc.ServiceError | null, response: period_service_pb.Periods) => void): grpc.ClientUnaryCall;
    public getPeriodViaStartTime(request: period_service_pb.GetPeriodViaStartTimes, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: period_service_pb.Periods) => void): grpc.ClientUnaryCall;
    public getPeriodViaStartTime(request: period_service_pb.GetPeriodViaStartTimes, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: period_service_pb.Periods) => void): grpc.ClientUnaryCall;
    public getPeriodViaFinishTime(request: period_service_pb.GetPeriodViaFinishTimes, callback: (error: grpc.ServiceError | null, response: period_service_pb.Periods) => void): grpc.ClientUnaryCall;
    public getPeriodViaFinishTime(request: period_service_pb.GetPeriodViaFinishTimes, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: period_service_pb.Periods) => void): grpc.ClientUnaryCall;
    public getPeriodViaFinishTime(request: period_service_pb.GetPeriodViaFinishTimes, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: period_service_pb.Periods) => void): grpc.ClientUnaryCall;
    public getActivePeriod(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: period_service_pb.PeriodsReply) => void): grpc.ClientUnaryCall;
    public getActivePeriod(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: period_service_pb.PeriodsReply) => void): grpc.ClientUnaryCall;
    public getActivePeriod(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: period_service_pb.PeriodsReply) => void): grpc.ClientUnaryCall;
}
