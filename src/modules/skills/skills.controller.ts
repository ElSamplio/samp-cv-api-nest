import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { FindResponseDto } from 'src/dtos/FindResponseDto';
import { CreateSkillDto } from 'src/dtos/skills/CreateSkillDto';
import { SkillCreatedResponseDto } from 'src/dtos/skills/SkillCreatedResponseDto';
import { Skills } from 'src/schemas/skills.schema';
import { SkillsService } from './skills.service';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Get()
  async findAll(): Promise<FindResponseDto<Skills>> {
    const data = await this.skillsService.findAll();
    return {
      success: true,
      data,
    };
  }

  @Post()
  @ApiCreatedResponse({
    description: 'Skill saved',
  })
  async create(
    @Body() createSkillDto: CreateSkillDto,
  ): Promise<SkillCreatedResponseDto> {
    const savedRecord = await this.skillsService.create(createSkillDto);
    return {
      success: true,
      message: 'Skill saved',
      savedRecord,
    };
  }
}
