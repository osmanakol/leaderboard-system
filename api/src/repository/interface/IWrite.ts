import { FilterQuery, Query, QueryOptions, SaveOptions, UpdateQuery } from 'mongoose';
import { IModel } from '../../model/base.model';
export interface IWrite<T extends IModel, K> {
    create(query: Query<T, K>, options?: SaveOptions):Promise<Document>
    update(query: FilterQuery<T>, update: UpdateQuery<T>, options: QueryOptions):Promise<Document>
    delete(query: FilterQuery<T>, options?: QueryOptions):Promise<Boolean>
}