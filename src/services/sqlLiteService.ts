const Database = require('better-sqlite3');

const dbPath = './tb_projects.db';

const db = new Database(dbPath);

db.pragma('journal_mode = WAL');

export { db }