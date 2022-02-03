import IController from '../../interfaces/IController';
import { IRankServer } from "../../../protos/build/rank_service_grpc_pb";
import * as grpc from "@grpc/grpc-js";
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { UpdatePlayerRankReq, PeriodIdRank, changePeriodReq } from '../../../protos/build/rank_service_pb';
import axios from "axios";
import redisUtil from "../../utils/redis.util";
import { SORTED_SET_NAME, HSET_PLAYER } from "../../config";
import { PlayerService } from '../player.model/player.service';
import { PlayerDto } from '../../clients/player.service/player.dto';
import { Types } from 'mongoose';

export class RankController implements IController, IRankServer {
    [name: string]: grpc.UntypedHandleCall;
    updatePlayerRank: grpc.handleClientStreamingCall<UpdatePlayerRankReq, Empty>;
    //changePeriod: grpc.handleUnaryCall<changePeriodReq, Empty>;
    // @ts-ignore
    private _playerService:PlayerService
    constructor() {
        this._playerService = new PlayerService()
    }

    pubRank = async (call: grpc.ServerUnaryCall<PeriodIdRank, Empty>, callback: grpc.sendUnaryData<Empty>) => {
        let new_rank = [];
        let data = []

        try {
            new_rank = await redisUtil.getRankViaRange(`${SORTED_SET_NAME}_${call.request.getId()}`, 0, 100)
            let players = await redisUtil.hgetall(HSET_PLAYER)
            for (let index = 0; index < new_rank.length; index+=2) {
                let player = JSON.parse(players[`${new_rank[index]}`])
                data.push({
                    "playerId": new_rank[index],
                    "username": player["username"],
                    "country": player["country"],
                    "money": Number(new_rank[index + 1]).toFixed(2),
                    "daily_diff": player["daily_diff"] !== undefined ? player["daily_diff"] : 0
                })
                
            }
            console.log(data)
        } catch (error) {
            console.log(error)
        }
       
        /*for (const iterator of call.request.getRanksList()) {
            new_rank.push(
                {
                    "money": iterator.getMoney(),
                    "playerId": iterator.getUserId()
                }
            )
        }*/

        axios({
            method: "post",
            url: "http://host_machine:51001/rank-update",
            data: JSON.stringify({
                data: data
            })
        }).then((val) => {
            console.log(val)
        }).catch((err) => {
            console.log(err)
        })


        callback(null, new Empty())
    }

    changePeriod = async (call:grpc.ServerUnaryCall<changePeriodReq, Empty>, callback: grpc.sendUnaryData<Empty>) => {
        try {
            let ranks = await redisUtil.getRankViaRange(`${SORTED_SET_NAME}_${call.request.getId()}`, 0, 99)
            let pool_money = call.request.getPoolMoney()
            let money_20 = calculatePoolPercent(pool_money, 20)
            let money_15 = calculatePoolPercent(pool_money, 15)
            let money_10 = calculatePoolPercent(pool_money, 10)
            pool_money = pool_money - (money_20 + money_15 + money_10)
            let set_count = await redisUtil.getSortedCount(SORTED_SET_NAME)
            let price = 0
            let term_count = 0
            if (set_count > 3) {
                // ((last number - first number) / increasing amount) + 1 => number count
                // ((last number + first number) / 2) * number count => summation of consecutive numbers
                term_count = (set_count - 4) / 2
                price = pool_money / (((term_count + 1) / 2) * term_count)
            }
       

            let players = await redisUtil.hgetall(HSET_PLAYER)
            
            for (let index = 0; index < ranks.length; index+=2) {
                let player = JSON.parse(players[`${ranks[index]}`]) as PlayerDto
                let total_money = 0
                if (index < 6) {
                    switch (index) {
                        case 0:
                            total_money = total_money + money_20
                            break;
                        case 2:
                            total_money = total_money + money_15
                            break;
                        
                        case 4:
                            total_money = total_money + money_10
                            break;
                        default:
                            break;
                    }
               
                } else {
                    total_money = player.total_money.valueOf() + (price * term_count)
                    term_count = term_count - 1
                }
                
                console.log(total_money)
                console.log(player)
                await this._playerService.update({_id: new Types.ObjectId(`${ranks[index]}`)}, {$set: {
                    total_money: total_money
                }}, {lean:true}).catch((err) => {
                    console.log(err)
                })
                await redisUtil.hset(HSET_PLAYER, `${ranks[index]}`, JSON.stringify({
                    "username": player.username,
                    "money": total_money,
                    "country": player.country.country_name,
                    "daily_diff": 0
                }))
            }
            await redisUtil.delSet(SORTED_SET_NAME)


        } catch (error) {
            console.log(error)
        }

        callback(null, new Empty())
    }


    

}


const calculatePoolPercent = (total_money:number, percent:number):number => {
    return (total_money * percent) / 100
}
