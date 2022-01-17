import { Service } from "../../interfaces/IService";
import { PlayerDto } from "../../clients/player.service/player.dto";
import PlayerModel from "../../clients/player.service/player.schema";
import { PlayerRepository } from "./player.repository";

export class PlayerService extends Service<PlayerDto> {
    constructor() {
        super(new PlayerRepository(PlayerModel))
    }
}