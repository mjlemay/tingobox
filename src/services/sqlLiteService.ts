const Database = require('better-sqlite3');
const path = require('node:path');
import { drizzle } from 'drizzle-orm/better-sqlite3';

const dbName = 'tb_projects.db';
const dbPath =
    process.env.NODE_ENV === "development"
        ? `db/${dbName}`
        : path.join(process.resourcesPath, `db/${dbName}`);

const sqlite = new Database(dbPath);
sqlite.pragma('journal_mode = WAL');
const db = drizzle(sqlite);

export { db }