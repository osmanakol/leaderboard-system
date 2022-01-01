import { Router } from 'express';
import IRoute from '../../interfaces/IRoute';
import { PlayerController } from './player.controller';
import { asyncHandler } from '../../helpers/async_handler.helper';

export class PlayerRoute extends IRoute{
    private _playerController: PlayerController

    constructor() {
        super("player")
        this._playerController = new PlayerController()
    }
    
    getRoutes(): Router {

        this.router.get(
            "/all",
            asyncHandler(this._playerController.getAllPlayers)
        )

        this.router.get(
            "/:id",
            asyncHandler(this._playerController.getPlayerById)
        )
        
        this.router.post(
            "/",
            asyncHandler(this._playerController.addPlayer)
        )
        
        this.router.put(
            "/:id",
            asyncHandler(this._playerController.updatePlayer)
        )

        this.router.delete(
            "/:id",
            asyncHandler(this._playerController.deletePlayer)
        )
        
        return this.router
    }

}