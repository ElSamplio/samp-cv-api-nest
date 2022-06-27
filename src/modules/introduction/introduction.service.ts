import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Introduction,
  IntroductionDocument,
} from '../../schemas/introduction.schema';

@Injectable()
export class IntroductionService {
  constructor(
    @InjectModel(Introduction.name)
    private introductionlModel: Model<IntroductionDocument>,
  ) {}

  async findAll(): Promise<Introduction[]> {
    return await this.introductionlModel.find().exec();
  }
}
