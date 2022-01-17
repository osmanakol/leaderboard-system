// package: cron.service
// file: cron_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class PeriodCron extends jspb.Message { 
    getTime(): string;
    setTime(value: string): PeriodCron;
    getPeriodid(): string;
    setPeriodid(value: string): PeriodCron;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PeriodCron.AsObject;
    static toObject(includeInstance: boolean, msg: PeriodCron): PeriodCron.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PeriodCron, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PeriodCron;
    static deserializeBinaryFromReader(message: PeriodCron, reader: jspb.BinaryReader): PeriodCron;
}

export namespace PeriodCron {
    export type AsObject = {
        time: string,
        periodid: string,
    }
}
