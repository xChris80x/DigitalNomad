//Datenbank erstellen mit Sqlite3

const sqlite3 = require ("sqlite3");

let db = new sqlite3.Database("data.db", (err) => {

if(err) {

    throw err;

}

console.log("connected with Sqlite Database");

//Erstellung einer Tabelle
db.run (
    `CREATE TABLE places (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT,
        latitude REAL,
        longitude REAL
        
    )`,
    (err) => {

    if (err){

        return;
    }
     
    var insert = "INSERT INTO places (id, name, latitude, longitude) VALUES (?,?,?,?) ";
  // Testdatensatz
  db.run(insert,  [
    "12",
    "Hamburg",
    53.551086,
    9.993682,

  ]
  );
}
);
});
//Datenbank exportieren 
module.exports = db;