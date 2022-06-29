import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SkillDocument = Skills & Document;

@Schema()
export class Skills {
  @Prop()
  name: string;

  @Prop()
  yearsOfExperience: number;

  @Prop()
  skillLevel: number;

  @Prop()
  icon: string;
}

export const SkillSchema = SchemaFactory.createForClass(Skills);
