import IController from '../../interfaces/IController';
import { IRankServer } from "../../../protos/build/rank_service_grpc_pb";
import * as grpc from "@grpc/grpc-js";
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { UpdatePlayerRankReq, PeriodId } from '../../../protos/build/rank_service_pb';

export class RankController implements IController, IRankServer {
    [name: string]: grpc.UntypedHandleCall;
    updatePlayerRank: grpc.handleClientStreamingCall<UpdatePlayerRankReq, Empty>;
    changePeriod: grpc.handleUnaryCall<PeriodId, Empty>;


}
