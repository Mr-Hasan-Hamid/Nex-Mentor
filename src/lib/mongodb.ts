import mongoose from 'mongoose';

const MONGODB_URI: string = process.env.MONGODB_URI || '';

interface Cached {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: Cached;
}

let cached: Cached = global.mongoose || { conn: null, promise: null };

export async function dbConnect(): Promise<typeof mongoose | null> {
  if (!MONGODB_URI) {
    console.warn('[MongoDB] MONGODB_URI not defined. Legacy Mongo route disabled.');
    return null;
  }

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

if (process.env.NODE_ENV !== 'production') global.mongoose = cached;
