// package: period.service
// file: period_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class GetPeriodViaStartTimes extends jspb.Message { 
    getStartTime(): string;
    setStartTime(value: string): GetPeriodViaStartTimes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPeriodViaStartTimes.AsObject;
    static toObject(includeInstance: boolean, msg: GetPeriodViaStartTimes): GetPeriodViaStartTimes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPeriodViaStartTimes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPeriodViaStartTimes;
    static deserializeBinaryFromReader(message: GetPeriodViaStartTimes, reader: jspb.BinaryReader): GetPeriodViaStartTimes;
}

export namespace GetPeriodViaStartTimes {
    export type AsObject = {
        startTime: string,
    }
}

export class GetPeriodViaFinishTimes extends jspb.Message { 
    getFinishTime(): string;
    setFinishTime(value: string): GetPeriodViaFinishTimes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPeriodViaFinishTimes.AsObject;
    static toObject(includeInstance: boolean, msg: GetPeriodViaFinishTimes): GetPeriodViaFinishTimes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPeriodViaFinishTimes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPeriodViaFinishTimes;
    static deserializeBinaryFromReader(message: GetPeriodViaFinishTimes, reader: jspb.BinaryReader): GetPeriodViaFinishTimes;
}

export namespace GetPeriodViaFinishTimes {
    export type AsObject = {
        finishTime: string,
    }
}

export class Periods extends jspb.Message { 
    clearPeriodsList(): void;
    getPeriodsList(): Array<PeriodObj>;
    setPeriodsList(value: Array<PeriodObj>): Periods;
    addPeriods(value?: PeriodObj, index?: number): PeriodObj;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Periods.AsObject;
    static toObject(includeInstance: boolean, msg: Periods): Periods.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Periods, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Periods;
    static deserializeBinaryFromReader(message: Periods, reader: jspb.BinaryReader): Periods;
}

export namespace Periods {
    export type AsObject = {
        periodsList: Array<PeriodObj.AsObject>,
    }
}

export class PeriodObj extends jspb.Message { 
    getStartTime(): string;
    setStartTime(value: string): PeriodObj;
    getFinishTime(): string;
    setFinishTime(value: string): PeriodObj;
    getTotalDay(): PeriodType;
    setTotalDay(value: PeriodType): PeriodObj;
    getIsActive(): boolean;
    setIsActive(value: boolean): PeriodObj;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PeriodObj.AsObject;
    static toObject(includeInstance: boolean, msg: PeriodObj): PeriodObj.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PeriodObj, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PeriodObj;
    static deserializeBinaryFromReader(message: PeriodObj, reader: jspb.BinaryReader): PeriodObj;
}

export namespace PeriodObj {
    export type AsObject = {
        startTime: string,
        finishTime: string,
        totalDay: PeriodType,
        isActive: boolean,
    }
}

export class PeriodObjReply extends jspb.Message { 
    getId(): string;
    setId(value: string): PeriodObjReply;
    getStartTime(): string;
    setStartTime(value: string): PeriodObjReply;
    getFinishTime(): string;
    setFinishTime(value: string): PeriodObjReply;
    getTotalDay(): PeriodType;
    setTotalDay(value: PeriodType): PeriodObjReply;
    getIsActive(): boolean;
    setIsActive(value: boolean): PeriodObjReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PeriodObjReply.AsObject;
    static toObject(includeInstance: boolean, msg: PeriodObjReply): PeriodObjReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PeriodObjReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PeriodObjReply;
    static deserializeBinaryFromReader(message: PeriodObjReply, reader: jspb.BinaryReader): PeriodObjReply;
}

export namespace PeriodObjReply {
    export type AsObject = {
        Id: string,
        startTime: string,
        finishTime: string,
        totalDay: PeriodType,
        isActive: boolean,
    }
}

export class PeriodsReply extends jspb.Message { 
    clearPeriodsList(): void;
    getPeriodsList(): Array<PeriodObjReply>;
    setPeriodsList(value: Array<PeriodObjReply>): PeriodsReply;
    addPeriods(value?: PeriodObjReply, index?: number): PeriodObjReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PeriodsReply.AsObject;
    static toObject(includeInstance: boolean, msg: PeriodsReply): PeriodsReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PeriodsReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PeriodsReply;
    static deserializeBinaryFromReader(message: PeriodsReply, reader: jspb.BinaryReader): PeriodsReply;
}

export namespace PeriodsReply {
    export type AsObject = {
        periodsList: Array<PeriodObjReply.AsObject>,
    }
}

export enum PeriodType {
    NONE = 0,
    DAILY = 1,
    WEEKLY = 7,
    MONTHLY = 30,
}
