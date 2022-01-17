// package: reward.service
// file: reward_pool.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class PlayerId extends jspb.Message { 
    getPlayerId(): string;
    setPlayerId(value: string): PlayerId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayerId.AsObject;
    static toObject(includeInstance: boolean, msg: PlayerId): PlayerId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlayerId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayerId;
    static deserializeBinaryFromReader(message: PlayerId, reader: jspb.BinaryReader): PlayerId;
}

export namespace PlayerId {
    export type AsObject = {
        playerId: string,
    }
}

export class PeriodId extends jspb.Message { 
    getPeriodId(): string;
    setPeriodId(value: string): PeriodId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PeriodId.AsObject;
    static toObject(includeInstance: boolean, msg: PeriodId): PeriodId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PeriodId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PeriodId;
    static deserializeBinaryFromReader(message: PeriodId, reader: jspb.BinaryReader): PeriodId;
}

export namespace PeriodId {
    export type AsObject = {
        periodId: string,
    }
}

export class Money extends jspb.Message { 
    getMoney(): number;
    setMoney(value: number): Money;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Money.AsObject;
    static toObject(includeInstance: boolean, msg: Money): Money.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Money, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Money;
    static deserializeBinaryFromReader(message: Money, reader: jspb.BinaryReader): Money;
}

export namespace Money {
    export type AsObject = {
        money: number,
    }
}

export class Pool extends jspb.Message { 

    hasPlayer(): boolean;
    clearPlayer(): void;
    getPlayer(): PlayerId | undefined;
    setPlayer(value?: PlayerId): Pool;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): PeriodId | undefined;
    setPeriod(value?: PeriodId): Pool;

    hasMoney(): boolean;
    clearMoney(): void;
    getMoney(): Money | undefined;
    setMoney(value?: Money): Pool;
    getTime(): string;
    setTime(value: string): Pool;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Pool.AsObject;
    static toObject(includeInstance: boolean, msg: Pool): Pool.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Pool, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Pool;
    static deserializeBinaryFromReader(message: Pool, reader: jspb.BinaryReader): Pool;
}

export namespace Pool {
    export type AsObject = {
        player?: PlayerId.AsObject,
        period?: PeriodId.AsObject,
        money?: Money.AsObject,
        time: string,
    }
}
