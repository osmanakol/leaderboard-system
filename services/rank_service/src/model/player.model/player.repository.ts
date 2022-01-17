import { BaseRepository } from "../../repository/base/BaseRepository";
import { PlayerDto } from "../../clients/player.service/player.dto";
import { Player } from "../../clients/player.service/player.schema";

export class PlayerRepository extends BaseRepository<PlayerDto, Player> {}