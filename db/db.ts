
import { drizzle } from 'drizzle-orm/expo-sqlite/driver';
import * as SQLite from 'expo-sqlite';

export const expo = SQLite.openDatabaseSync('db.db');
export const db = drizzle(expo);
