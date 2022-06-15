import { Skills } from 'src/schemas/skills.schema';
import { BasicResponseDto } from '../BasicResponseDto';

export interface SkillCreatedResponseDto extends BasicResponseDto {
  savedRecord: Skills;
}
