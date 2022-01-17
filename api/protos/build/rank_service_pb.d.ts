// package: rank.service
// file: rank_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class UpdatePlayerRankResp extends jspb.Message { 
    clearPlayerrankList(): void;
    getPlayerrankList(): Array<UpdatePlayerRankReq>;
    setPlayerrankList(value: Array<UpdatePlayerRankReq>): UpdatePlayerRankResp;
    addPlayerrank(value?: UpdatePlayerRankReq, index?: number): UpdatePlayerRankReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePlayerRankResp.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePlayerRankResp): UpdatePlayerRankResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePlayerRankResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePlayerRankResp;
    static deserializeBinaryFromReader(message: UpdatePlayerRankResp, reader: jspb.BinaryReader): UpdatePlayerRankResp;
}

export namespace UpdatePlayerRankResp {
    export type AsObject = {
        playerrankList: Array<UpdatePlayerRankReq.AsObject>,
    }
}

export class UpdatePlayerRankReq extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): UpdatePlayerRankReq;
    getMoney(): number;
    setMoney(value: number): UpdatePlayerRankReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePlayerRankReq.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePlayerRankReq): UpdatePlayerRankReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePlayerRankReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePlayerRankReq;
    static deserializeBinaryFromReader(message: UpdatePlayerRankReq, reader: jspb.BinaryReader): UpdatePlayerRankReq;
}

export namespace UpdatePlayerRankReq {
    export type AsObject = {
        userId: string,
        money: number,
    }
}

export class changePeriodReq extends jspb.Message { 
    getId(): string;
    setId(value: string): changePeriodReq;
    getPoolMoney(): number;
    setPoolMoney(value: number): changePeriodReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): changePeriodReq.AsObject;
    static toObject(includeInstance: boolean, msg: changePeriodReq): changePeriodReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: changePeriodReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): changePeriodReq;
    static deserializeBinaryFromReader(message: changePeriodReq, reader: jspb.BinaryReader): changePeriodReq;
}

export namespace changePeriodReq {
    export type AsObject = {
        id: string,
        poolMoney: number,
    }
}

export class PeriodIdRank extends jspb.Message { 
    getId(): string;
    setId(value: string): PeriodIdRank;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PeriodIdRank.AsObject;
    static toObject(includeInstance: boolean, msg: PeriodIdRank): PeriodIdRank.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PeriodIdRank, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PeriodIdRank;
    static deserializeBinaryFromReader(message: PeriodIdRank, reader: jspb.BinaryReader): PeriodIdRank;
}

export namespace PeriodIdRank {
    export type AsObject = {
        id: string,
    }
}
