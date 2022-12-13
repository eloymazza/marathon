// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getModelForClass } from '@typegoose/typegoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/dbConnect';
import Test from '../../model/Test';

type Data = {
  value?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await dbConnect();
  let docs = await Test.find();
  res.status(200).json({ value: docs[0].field });
}
