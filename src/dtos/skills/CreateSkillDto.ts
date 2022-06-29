import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSkillDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  yearsOfExperience: number;

  @IsNotEmpty()
  @ApiProperty({ example: 'pi pi-star' })
  icon: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'pi pi-star' })
  skillLevel: number;
}
