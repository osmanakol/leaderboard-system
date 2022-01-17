import { NextFunction, Request, Response } from "express";
import IController from "../../interfaces/IController";
import { PlayerDto } from "./player.dto";
import { PlayerService } from "./player.service";
import { BaseResponse, HttpStatusCode, HTTP400Error } from "../../utils/index";
import CountryModel from "../country/country.model";
import { isNullOrUndefined } from "../../helpers/index";
import redisUtil from "../../utils/redis.util";
import { HSET_PLAYER, SORTED_SET_NAME } from "../../config";
import { CountryService } from "../country/country.service";
import { rankUpdate } from "../../client/index";
import { PeriodIdRank } from "../../../protos/build/rank_service_pb";

export class PlayerController implements IController {
    private _playerService: PlayerService
    private _countryService: CountryService

    constructor() {
        this._playerService = new PlayerService()
        this._countryService = new CountryService()
    }

    public addPlayer = async (req: Request, res: Response, next:NextFunction) => {
        let playerDto: PlayerDto = new PlayerDto()
        playerDto = req.body as PlayerDto

        const result = await this._playerService.create(playerDto, {})
        let redisObject = {
            "username": result.username,
            "money": result.total_money,
            "country": await (await this._countryService.findOne({_id: playerDto.country}, {}, {lean:true})).country_name,
            "daily_diff": 0
        }
        console.log(redisObject)
        if(result){
            await redisUtil.hset(HSET_PLAYER, result._id.toString(), JSON.stringify(redisObject))
        }

        BaseResponse(HttpStatusCode.CREATED, result, res)
    }

    public updatePlayer = async (req: Request, res: Response, next: NextFunction) => {
        let playerDto:PlayerDto = new PlayerDto()
        playerDto = req.body as PlayerDto

        const result = await this._playerService.update({_id: req.params.id}, {
            $set:  {
                username: playerDto.username,
                country: playerDto.country,
                total_money: playerDto.total_money
            }
        }, {lean:true})
        
        let redisObject = {
            "username": result.username,
            "money": result.total_money,
            "country": result.country.country_name
        }

        if(result){
            await redisUtil.hset(HSET_PLAYER, result._id.toString(), JSON.stringify(redisObject))
        }

        if (!result)
            throw new HTTP400Error("Player could not found")

        BaseResponse(HttpStatusCode.OK, result, res)
    }

    public getPlayerById = async (req: Request, res: Response, next: NextFunction) => {
        const player = await this._playerService.findOne({_id: req.params.id}, {createdAt:0, updatedAt:0}, {lean: true, populate: {
            path: "country",
            match: true,
            model: CountryModel
        }})

        if (isNullOrUndefined(player))
            throw new HTTP400Error("Player could not found")
        
        BaseResponse(HttpStatusCode.OK, null, res, "Player updated")
    }

    public getAllPlayers = async (req: Request, res: Response, next: NextFunction) => {
        const players = await this._playerService.find({}, {createdAt:0, updatedAt:0}, {lean:true, populate: {
            path:"country",
            match: true,
            model: CountryModel
        }})

        BaseResponse(HttpStatusCode.OK, players, res)
    }

    public deletePlayer = async (req: Request, res: Response, next: NextFunction) => {
        const result = await this._playerService.delete({_id: req.params.id}, {lean: true})

        if (!result)
            throw new HTTP400Error("Player could not found or deleted")
        
        BaseResponse(HttpStatusCode.OK, null, res, "Player deleted")
    }
}