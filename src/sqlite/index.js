import sqlite3InitModule from '@sqlite.org/sqlite-wasm';

export let db;

const log = (...args) => console.log(...args);
const error = (...args) => console.error(...args);
const start = function (sqlite3) {
  log('Running SQLite3 version', sqlite3.version.libVersion);
  const db = new sqlite3.oo1.DB({
    filename: ':localStorage:',
    flags: 'ct',
    vfs: 'kvvs'
  });
  db.exec('CREATE TABLE IF NOT EXISTS test(name, age);');
  return db;
};

log('Loading and initializing SQLite3 module...');

sqlite3InitModule({
  print: log,
  printErr: error,
}).then((sqlite3) => {
  try {
    log('Done initializing. Running demo...');
    db = start(sqlite3);
  } catch (err) {
    error(err.name, err.message);
  }
});