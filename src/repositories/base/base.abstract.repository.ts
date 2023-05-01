import { IBaseInterfaceRepository } from './base.interface.repository';
import {
  DeleteResult,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
  UpdateResult,
} from 'typeorm';
import { QueryPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class BaseAbstractRepository<T>
  implements IBaseInterfaceRepository<T>
{
  private entity: Repository<T>;

  protected constructor(entity: Repository<T>) {
    this.entity = entity;
  }

  public async create(data: any): Promise<T> {
    return await this.entity.save(data);
  }

  public async getById(id: FindOneOptions<T>): Promise<T> {
    return await this.entity.findOne(id);
  }
  public async getAll(): Promise<T[]> {
    return await this.entity.find();
  }
  public async getByCondition(
    filterCondition: FindOptionsWhere<T>,
  ): Promise<T[]> {
    return await this.entity.findBy(filterCondition);
  }
  public async getOneByCondition(query: FindOptionsWhere<T>): Promise<T> {
    return await this.entity.findOneBy(query);
  }
  public async callStoredProcedure(sp: string, parameters?: any): Promise<T> {
    return await this.entity.query('CALL foundup.' + sp, [parameters]);
  }
  public async update(
    updateConditions: any,
    data: QueryPartialEntity<T> | any,
  ): Promise<UpdateResult> {
    return await this.entity.update(updateConditions, data);
  }
  public async delete(id: string): Promise<DeleteResult> {
    return await this.entity.delete(id);
  }
}
