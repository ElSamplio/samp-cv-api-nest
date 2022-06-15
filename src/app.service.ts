import { Injectable } from '@nestjs/common';
import { BasicResponseDto } from './dtos/BasicResponseDto';

@Injectable()
export class AppService {
  getHello(): BasicResponseDto {
    return {
      success: true,
      message:
        'Creative, passionate, responsible, what I most like of my job is teach and learn',
    };
  }
}
