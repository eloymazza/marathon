import mongoose from 'mongoose';

type Connection = {
  conn?: typeof mongoose;
  promise?: Promise<typeof mongoose>;
};

declare global {
  var mongoose: Connection;
}

const MONGODB_URI = process.env.MONGODB_URI || '';
console.log(MONGODB_URI);
if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  global.mongoose = {};
  cached = global.mongoose;
}

const dbConnect = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI);
  }

  cached.promise
    .then((connection) => {
      cached.conn = connection;
    })
    .catch((err) => {
      throw Error('Error connection to dB!');
    });

  return cached.conn;
};

export default dbConnect;
