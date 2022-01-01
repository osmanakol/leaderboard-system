import { Service } from "../../interfaces/IService";
import { PlayerDto } from "./player.dto";
import PlayerModel from "./player.model";
import { PlayerRepository } from "./player.repository";

export class PlayerService extends Service<PlayerDto> {
    constructor() {
        super(new PlayerRepository(PlayerModel))
    }
}