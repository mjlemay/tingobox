const Database = require('better-sqlite3');

const dbPath = './tb_projects.db';

const sqliteDb = new Database(dbPath);
sqliteDb.pragma('journal_mode = WAL');

exports.db = sqliteDb;