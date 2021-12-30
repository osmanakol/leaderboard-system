import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { FilterQuery, Query, QueryOptions, SaveOptions, UpdateQuery } from 'mongoose';
import { IRead } from '../interface/IRead';
import { IWrite } from '../interface/IWrite';

export abstract class BaseRepository<T, K> implements IRead<T, K>, IWrite<T,K> {
    protected readonly _model:ModelType<K>

    constructor(model: ModelType<K>) {
        this._model = model;
    }

    
    async create(query: Query<T, K, {}, K>, options?: SaveOptions): Promise<DocumentType<K>> {
        return await new this._model(query).save(options) as DocumentType<K>
    }
    async update(query: FilterQuery<T>, update: UpdateQuery<T>, options: QueryOptions): Promise<DocumentType<K>> {
        return await this._model.updateOne(query, update, options) as unknown as DocumentType<K>
    }
    async delete(query: FilterQuery<T>, options?: QueryOptions): Promise<Boolean> {
        return await (await this._model.deleteOne(query, options)).deletedCount != 0
    }
    async find(args: FilterQuery<T>, projection?: any, options?: QueryOptions): Promise<DocumentType<K>[]> {
        return await this._model.find(args, projection, options) as DocumentType<K>[]
    }
    async findOne(args: FilterQuery<T>, projection: any, options: QueryOptions): Promise<DocumentType<K> | null> {
        return await this._model.findOne(args, projection, options) as DocumentType<K>
    }

    
}