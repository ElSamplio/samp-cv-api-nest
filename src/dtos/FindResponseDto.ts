import { BasicResponseDto } from './BasicResponseDto';

export interface FindResponseDto<T> extends BasicResponseDto {
  data: T[];
}
