import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { BasicResponseDto } from './dtos/BasicResponseDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): BasicResponseDto {
    return this.appService.getHello();
  }
}
