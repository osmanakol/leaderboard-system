import { FilterQuery, QueryOptions } from 'mongoose';
import { IModel } from '../../model/base.model';
import { DocumentType } from "@typegoose/typegoose";

export interface IRead<T extends IModel, K> {
    find(args: FilterQuery<T>, projection?: any, options?: QueryOptions):Promise<DocumentType<K>[]>
    findOne(args: FilterQuery<T>, projection: any, options: QueryOptions):Promise<DocumentType<K> | null>
}