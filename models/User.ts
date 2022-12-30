import { getModelForClass, prop } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';

export class User {
  @prop()
  public __id?: ObjectId;
  @prop({ required: true })
  public fullName!: string;
  @prop({ required: true })
  public name!: string;
  @prop({ required: true })
  public surname!: string;
  @prop({ required: true })
  public email!: string;
  @prop()
  public dateOfBirth?: string;
  @prop({ required: true })
  public signUpMethod!: string;
}

export const UserModel = getModelForClass(User);
