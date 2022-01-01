import { BaseRepository } from "../../repository/base/BaseRepository";
import { PlayerDto } from "./player.dto";
import { Player } from "./player.model";

export class PlayerRepository extends BaseRepository<PlayerDto, Player> {}