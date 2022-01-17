import { FilterQuery, Query, QueryOptions, SaveOptions, UpdateQuery } from 'mongoose';
import { IModel } from '../../model/base.model';
import { DocumentType } from "@typegoose/typegoose";
export interface IWrite<T extends IModel, K> {
    create(query: Query<T, K>, options?: SaveOptions):Promise<DocumentType<K>>
    update(query: FilterQuery<T>, update: UpdateQuery<T>, options: QueryOptions):Promise<Boolean>
    delete(query: FilterQuery<T>, options?: QueryOptions):Promise<Boolean>
}