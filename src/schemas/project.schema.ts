import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema()
export class Project {
  @Prop()
  company: string;

  @Prop()
  name: string;

  @Prop()
  abstract: string;

  @Prop()
  role: string;

  @Prop()
  responsibilities: string;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop()
  technologies: Technology[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);

type Technology = {
  name: string;
  icon: string;
};
