import { getModelForClass, prop } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';

class Test {
  @prop()
  public __id?: ObjectId;
  @prop()
  public field?: string;
}

export default getModelForClass(Test);
