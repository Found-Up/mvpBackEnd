import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { NCUSkills } from './ncu-skill.entity';
import { NCUEducation } from './ncu-education.entity';
import { NCUExperience } from './ncu-experience.entity';

@Entity({ name: 'ncu' })
export class NCU {
  @PrimaryGeneratedColumn()
  ncu_id: number;

  @Column()
  user_id: number;

  @Column()
  biography: string;

  @Column()
  headline: string;

  @Column()
  github_link: string;

  @Column()
  portfolio_link: string;

  skills: NCUSkills[];

  education: NCUEducation[];

  experience: NCUExperience[];
}
