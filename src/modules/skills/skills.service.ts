import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Skills, SkillDocument } from '../../schemas/skills.schema';
import { CreateSkillDto } from 'src/dtos/skills/CreateSkillDto';

@Injectable()
export class SkillsService {
  constructor(
    @InjectModel(Skills.name) private skillModel: Model<SkillDocument>,
  ) {}

  async create(createSkillDto: CreateSkillDto): Promise<Skills> {
    const createdSkill = new this.skillModel(createSkillDto);
    return await createdSkill.save();
  }

  async findAll(): Promise<Skills[]> {
    return await this.skillModel.find().exec();
  }
}
