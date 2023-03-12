import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'questions' })
export class Question {
  @PrimaryGeneratedColumn()
  question_id: number;

  @Column()
  company_id: number;

  @Column()
  question_text: string;

  @Column({ type: 'timestamp' })
  created_at: any;

  @Column({ type: 'timestamp' })
  end_date: any;

  @Column()
  created_by: number;

  @Column()
  active_status: string;

  @Column()
  updated_by: number;
}
