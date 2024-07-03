const Database = require('better-sqlite3');

const dbPath = './tb_projects.db';

const db = new Database(dbPath).pragma('journal_mode = WAL');

export { db }    


// const Database = require('better-sqlite3');

// const dbPath = './tb_projects.db';

// export default class sqlLiteService {
//     sqliteDb = new Database(dbPath).pragma('journal_mode = WAL');
// }
