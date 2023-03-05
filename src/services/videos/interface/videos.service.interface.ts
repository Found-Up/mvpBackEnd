import { Video } from '../entity/videos.entity';
import { DeleteResult } from 'typeorm';

export interface IVideoService {
  createUser(videoDto: CreateVideoDto): Promise<Video>;
  getAll(): Promise<Video[]>;
  getById(id: number): Promise<Video>;
  delete(id: string): Promise<DeleteResult>;
}