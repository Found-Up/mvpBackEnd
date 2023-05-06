import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateNcuDto {
  @IsNotEmpty()
  user_id: number;

  @IsOptional()
  biography: string;

  @IsOptional()
  headline: string;

  @IsOptional()
  github_link: string;

  @IsOptional()
  portfolio_link: string;
}
