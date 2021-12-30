import { BeAnObject, DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { FilterQuery, Query, QueryOptions, SaveOptions, UpdateQuery } from 'mongoose';
import { IRead } from '../interface/IRead';
import { IWrite } from '../interface/IWrite';

export abstract class BaseRepository<T, K> implements IRead<T, K>, IWrite<T,K> {
    protected readonly _model:ModelType<K>

    constructor(model: ModelType<K>) {
        this._model = model;
    }

    
    create(query: Query<T, K, {}, K>, options?: SaveOptions): Promise<Document> {
        throw new Error('Method not implemented.');
    }
    update(query: FilterQuery<T>, update: UpdateQuery<T>, options: QueryOptions): Promise<Document> {
        throw new Error('Method not implemented.');
    }
    delete(query: FilterQuery<T>, options?: QueryOptions): Promise<Boolean> {
        throw new Error('Method not implemented.');
    }
    find(args: FilterQuery<T>, projection?: any, options?: QueryOptions): Promise<Document[]> {
        throw new Error('Method not implemented.');
    }
    findOne(args: FilterQuery<T>, projection: any, options: QueryOptions): Promise<DocumentType<K, BeAnObject> | null> {
        throw new Error('Method not implemented.');
    }

    
}