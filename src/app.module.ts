import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillsModule } from './modules/skills/skills.module';
import { IntroductionModule } from './modules/introduction/introduction.module';
import { ProjectModule } from './modules/projects/project.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_CONNECTION_STRING),
    SkillsModule,
    IntroductionModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
