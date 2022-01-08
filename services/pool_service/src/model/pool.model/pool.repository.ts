import { BaseRepository } from "../../repository/base/BaseRepository";
import { PoolDto } from './pool.dto';
import { PoolSchema } from './pool.schema';

export class PoolRepository extends BaseRepository<PoolDto, PoolSchema> {}