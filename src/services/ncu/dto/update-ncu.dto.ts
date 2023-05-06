import { IsOptional } from 'class-validator';
import { NCUSkills } from '../entity/ncu-skill.entity';
import { NCUExperience } from '../entity/ncu-experience.entity';
import { NCUEducation } from '../entity/ncu-education.entity';

export class UpdateNcuDto {
  @IsOptional()
  biography: string;

  @IsOptional()
  headline: string;

  @IsOptional()
  github_link: string;

  @IsOptional()
  portfolio_link: string;

  @IsOptional()
  skills_list: NCUSkills[];

  @IsOptional()
  work_experience: NCUExperience[];

  @IsOptional()
  education: NCUEducation[];
}
