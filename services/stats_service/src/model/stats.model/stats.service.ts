import { StatDto } from "./stats.dto";
import { Service } from "../../interfaces/IService";
import { StatRepository } from "./stats.repository";
import StatModel from "./stats.schema";

export class StatService extends Service<StatDto> {
    constructor(){
        super(new StatRepository(StatModel))
    }
}