import { BaseRepository } from "../../repository/base/BaseRepository";
import { StatDto } from "./stats.dto";
import { StatSchema } from "./stats.schema";

export class StatRepository extends BaseRepository<StatDto, StatSchema> {}