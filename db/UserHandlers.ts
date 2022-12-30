import { User, UserModel } from '../models/User';

export const insertUser = async (user: User) => {
  const insertedUser = await UserModel.create(user);
  if (!insertedUser) throw new Error('Error inserting user ', insertedUser);
  console.log('User Inserted Successfully', insertedUser);
};
