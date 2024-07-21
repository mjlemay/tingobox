const Database = require('better-sqlite3');
import { drizzle } from 'drizzle-orm/better-sqlite3';

const dbPath = './tb_projects.db';

const sqlite = new Database(dbPath);
sqlite.pragma('journal_mode = WAL');
const db = drizzle(sqlite);

export { db }