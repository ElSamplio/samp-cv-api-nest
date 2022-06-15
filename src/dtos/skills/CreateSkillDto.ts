import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSkillDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'pi pi-star' })
  icon: string;
}
