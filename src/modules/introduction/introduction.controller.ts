import { Controller, Get } from '@nestjs/common';
import { FindResponseDto } from 'src/dtos/FindResponseDto';
import { Introduction } from 'src/schemas/introduction.schema';
import { IntroductionService } from './introduction.service';

@Controller('introduction')
export class IntroductionController {
  constructor(private readonly introductionService: IntroductionService) {}

  @Get()
  async findAll(): Promise<FindResponseDto<Introduction>> {
    const data = await this.introductionService.findAll();
    return {
      success: true,
      data,
    };
  }
}
