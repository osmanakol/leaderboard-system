import { IModel } from "../model/base.model";
import { FilterQuery, SaveOptions, UpdateQuery, QueryOptions } from 'mongoose';

export interface IService<T extends IModel>{
    find(filter:FilterQuery<T>, projection:any, options: QueryOptions):Promise<T[]>
    create(dtoItem:T, options?: SaveOptions):Promise<T>
    update(filter:FilterQuery<T>, updateQuery:UpdateQuery<T>, options:QueryOptions):Promise<T>
    findOne(filter:FilterQuery<T>, projection:any, options:QueryOptions):Promise<T>
    delete():void
}


export abstract class Service<T extends IModel> implements IService<T>{

    protected _repository:any

    constructor(repository: any){
        this._repository = repository
    }
    
    
    async find(filter: FilterQuery<T>, projection: any, options: QueryOptions): Promise<T[]> {
        const result = await this._repository.find(filter, projection, options)
        return result as unknown as T[]
    }

    async create(dtoItem: T, options?: SaveOptions): Promise<T> {
        const result = await this._repository.create(dtoItem, options)
        return result as unknown as T
    }

    async update(filter: FilterQuery<T>, updateQuery: UpdateQuery<T>, options: QueryOptions): Promise<T> {
        const result = await this._repository.update(filter, updateQuery, options)
        return result as unknown as T
    }

    async findOne(filter: FilterQuery<T>, projection: any, options: QueryOptions): Promise<T> {
        const result = await this._repository.findOne(filter, projection, options)
        return result as unknown as T
    }
    delete(): void {
        throw new Error("Method not implemented.");
    }

} 