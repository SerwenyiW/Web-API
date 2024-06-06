
var sqlite3 = require('sqlite3').verbose();

const DATABASE = "db.sqlite"

let db = new sqlite3.Database(DATABASE, (err) => {
    if (err) {
      console.error(err.message)
      throw err
    }else{
        console.log('Eskuel elindítva.')
        db.run(`CREATE TABLE xiaomis (
            name TEXT,
            displayres TEXT,
            os TEXT,
            backcamera TEXT,
            frontcamera TEXT,
            rname TEXT
            )`,
        (err) => {});
    }
});

module.exports = db;