import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type IntroductionDocument = Introduction & Document;

@Schema()
export class Introduction {
  @Prop()
  name: string;

  @Prop()
  title: string;

  @Prop()
  headLine: string;
}

export const IntroductionSchema = SchemaFactory.createForClass(Introduction);
