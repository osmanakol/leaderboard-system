// package: stats.service
// file: stats_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Stat extends jspb.Message { 
    getPlayerid(): string;
    setPlayerid(value: string): Stat;
    getTime(): string;
    setTime(value: string): Stat;
    getPeriodid(): string;
    setPeriodid(value: string): Stat;
    getTotalmoney(): number;
    setTotalmoney(value: number): Stat;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Stat.AsObject;
    static toObject(includeInstance: boolean, msg: Stat): Stat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Stat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Stat;
    static deserializeBinaryFromReader(message: Stat, reader: jspb.BinaryReader): Stat;
}

export namespace Stat {
    export type AsObject = {
        playerid: string,
        time: string,
        periodid: string,
        totalmoney: number,
    }
}

export class PeriodIdReq extends jspb.Message { 
    getPeriodid(): string;
    setPeriodid(value: string): PeriodIdReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PeriodIdReq.AsObject;
    static toObject(includeInstance: boolean, msg: PeriodIdReq): PeriodIdReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PeriodIdReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PeriodIdReq;
    static deserializeBinaryFromReader(message: PeriodIdReq, reader: jspb.BinaryReader): PeriodIdReq;
}

export namespace PeriodIdReq {
    export type AsObject = {
        periodid: string,
    }
}

export class StatsViaPeriod extends jspb.Message { 
    getPlayerid(): string;
    setPlayerid(value: string): StatsViaPeriod;
    getMoney(): number;
    setMoney(value: number): StatsViaPeriod;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatsViaPeriod.AsObject;
    static toObject(includeInstance: boolean, msg: StatsViaPeriod): StatsViaPeriod.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatsViaPeriod, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatsViaPeriod;
    static deserializeBinaryFromReader(message: StatsViaPeriod, reader: jspb.BinaryReader): StatsViaPeriod;
}

export namespace StatsViaPeriod {
    export type AsObject = {
        playerid: string,
        money: number,
    }
}

export class StatsViaPeriodReply extends jspb.Message { 
    clearStatsList(): void;
    getStatsList(): Array<StatsViaPeriod>;
    setStatsList(value: Array<StatsViaPeriod>): StatsViaPeriodReply;
    addStats(value?: StatsViaPeriod, index?: number): StatsViaPeriod;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatsViaPeriodReply.AsObject;
    static toObject(includeInstance: boolean, msg: StatsViaPeriodReply): StatsViaPeriodReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatsViaPeriodReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatsViaPeriodReply;
    static deserializeBinaryFromReader(message: StatsViaPeriodReply, reader: jspb.BinaryReader): StatsViaPeriodReply;
}

export namespace StatsViaPeriodReply {
    export type AsObject = {
        statsList: Array<StatsViaPeriod.AsObject>,
    }
}

export class StatReply extends jspb.Message { 
    clearStatsList(): void;
    getStatsList(): Array<Stat>;
    setStatsList(value: Array<Stat>): StatReply;
    addStats(value?: Stat, index?: number): Stat;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatReply.AsObject;
    static toObject(includeInstance: boolean, msg: StatReply): StatReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatReply;
    static deserializeBinaryFromReader(message: StatReply, reader: jspb.BinaryReader): StatReply;
}

export namespace StatReply {
    export type AsObject = {
        statsList: Array<Stat.AsObject>,
    }
}
