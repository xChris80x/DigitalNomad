//Datenbank erstellen mit Sqlite3

const sqlite3 = require ("sqlite3");

let db = new sqlite3.Database("data.db", (err) => {

if(err) {

    throw err;

}

console.log("connected with Sqlite Database");

//Erstellung einer Tabelle
db.run (
    `CREATE TABLE data (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        decription TEXT,
        created INTEGER,
        updated INTEGER
    )`,
    (err) => {

    if (err){

        return;
    }
     
    var insert = "INSERT INTO data (name, description, created, updated) VALUES (?,?,?,?) ";
  // Testdatensatz
  db.run(insert,  [
    "Orte anlegen",
    "Dies ist ein schöner Ort",
    Date.now(),
    Date.now(),

  ]
  );
}
);
});
//Datenbank exportieren 
module.exports = db;