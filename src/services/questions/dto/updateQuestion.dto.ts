import { IsNotEmpty, IsDate } from 'class-validator';
export class UpdateQuestionDto {
  @IsNotEmpty()
  questionId: number;

  @IsNotEmpty()
  questionText: string;

  @IsNotEmpty()
  duration: string;

  @IsNotEmpty()
  updatedBy: number;

  @IsNotEmpty()
  status: string;
}
