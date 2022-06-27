import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IntroductionService } from './introduction.service';
import { IntroductionController } from './introduction.controller';
import {
  IntroductionSchema,
  Introduction,
} from 'src/schemas/introduction.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Introduction.name, schema: IntroductionSchema },
    ]),
  ],
  controllers: [IntroductionController],
  providers: [IntroductionService],
})
export class IntroductionModule {}
