import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { SkillSchema, Skills } from 'src/schemas/skills.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Skills.name, schema: SkillSchema }]),
  ],
  controllers: [SkillsController],
  providers: [SkillsService],
})
export class SkillsModule {}
