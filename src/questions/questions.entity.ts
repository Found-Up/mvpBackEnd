import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'questions'})
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Company: string;

  @Column()
  Question: string;

  @Column()
  Role: string; // this is depending on the role of the NCU, i.e. Frontend dev, backend dev, etc.

  @Column({ default: true })
  isActive: boolean;

 
}