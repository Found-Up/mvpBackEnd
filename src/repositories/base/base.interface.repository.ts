import {
  DeleteResult,
  FindOneOptions,
  FindOptionsWhere,
  UpdateResult,
} from 'typeorm';
import { QueryPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export interface IBaseInterfaceRepository<T> {
  create(data: T | any): Promise<T>;
  getById(id: FindOneOptions<T>): Promise<T>;
  getAll(): Promise<T[]>;
  getByCondition(filterCondition: FindOptionsWhere<T>): Promise<T[]>;
  getOneByCondition(query: FindOptionsWhere<T>): Promise<T>;
  callStoredProcedure(sp: string, parameters?: any): Promise<T>;
  update(
    updateConditions: any,
    data: QueryPartialEntity<T> | any,
  ): Promise<UpdateResult>;
  delete(id: string): Promise<DeleteResult>;
}
