import { IsNotEmpty } from 'class-validator';

export class CreateSkillDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  icon: string;
}
