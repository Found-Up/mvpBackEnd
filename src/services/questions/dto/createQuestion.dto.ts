import { IsNotEmpty } from 'class-validator';
export class CreateQuestionDto {
  @IsNotEmpty()
  companyId: number;

  @IsNotEmpty()
  questionText: string;

  @IsNotEmpty()
  duration: string;

  @IsNotEmpty()
  createdBy: number;

  @IsNotEmpty()
  status: string;
}
