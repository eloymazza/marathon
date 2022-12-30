import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

// type Connection = {
//   conn?: typeof mongoose;
//   promise?: Promise<typeof mongoose>;
// };

// declare global {
//   var mongoose: Connection;
// }

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

export const connect = async () => {
  const conn = await mongoose
    .connect(MONGODB_URI)
    .catch((err) => console.log(err));

  console.log('Mongoose Connection Established');

  return { conn };
};

// /**
//  * Global is used here to maintain a cached connection across hot reloads
//  * in development. This prevents connections growing exponentially
//  * during API Route usage.
//  */
// let cached = global.mongoose;

// if (!cached) {
//   global.mongoose = {};
//   cached = global.mongoose;
//   console.log('not cached connection');
// }

// const dbConnect = async () => {
//   if (cached.conn) {
//     console.log('cached connection');
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI);
//   }

//   cached.promise
//     .then((connection) => {
//       cached.conn = connection;
//     })
//     .catch((err) => {
//       throw Error('Error connection to dB!');
//     });

//   return cached.conn;
// };

// export default dbConnect;
