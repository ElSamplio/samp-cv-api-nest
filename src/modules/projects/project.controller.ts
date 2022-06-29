import { Controller, Get } from '@nestjs/common';
import { FindResponseDto } from 'src/dtos/FindResponseDto';
import { Project } from 'src/schemas/project.schema';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async findAll(): Promise<FindResponseDto<Project>> {
    const data = await this.projectService.findAll();
    return {
      success: true,
      data,
    };
  }
}
