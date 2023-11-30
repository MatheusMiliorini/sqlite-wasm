import sqlite3InitModule from './js/sqlite-wasm/index.mjs';

self.sqlite3InitModule().then((sqlite3) => {
  console.log('Running SQLite3 version', sqlite3.version.libVersion);
  const db = new sqlite3.oo1.DB({
    filename: '',
    flags: 'ct',
    vfs: ''
  });
  db.exec('CREATE TABLE IF NOT EXISTS test(name, age);');
  // Your SQLite code here.
  onmessage = ({ data }) => {
    const { type, sql } = data;
    if (type === 'sql') {
      db.exec(sql);
    }
  };
});