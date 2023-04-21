import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project, ProjectDocument } from '../../schemas/project.schema';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name)
    private projectModel: Model<ProjectDocument>,
  ) {}

  async findAll(): Promise<Project[]> {
    return await this.projectModel.find({}).sort({ startDate: -1 }).exec();
  }
}
