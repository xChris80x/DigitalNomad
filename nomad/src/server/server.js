
// Express Server 

const express = require ("express");
const app = express();
const db = require ('../database/db'); 
const bodyParser = require('body-parser');
const HTTP_PORT = 3000; 



app.listen(HTTP_PORT, () => {
console.log(`Server ist running on Port ${HTTP_PORT} `);
} );


// zum Parsen von JSON-Daten
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// GET-Endpunkt zum Abrufen aller Orte
app.get('/api/orte', (req, res) => {
  db.all('SELECT * FROM places', [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
    }
    res.send(rows);
  });
});

// POST-Endpunkt zum Hinzufügen eines neuen Orts
app.post('/api/ort', (req, res) => {
  const {id, name, description, latitude, longitude } = req.body;

  db.run(
    'INSERT INTO places (id, name, description, latitude, longitude) VALUES (?, ?, ?, ?)',
    [id, name, description, latitude, longitude],
    (err) => {
      if (err) {
        console.error(err.message);
        res.status(500).send('Internal server error');
      }
      res.send('ort added successfully');
    }
  );
});

// PUT-Endpunkt zum Aktualisieren eines Orts
app.put('/api/ort/:id', (req, res) => {
  const {id,  name, description, latitude, longitude } = req.body;


  db.run(
    'UPDATE places SET name = ?, description = ?, latitude = ?, longitude = ? WHERE id = ?',
    [name, description, latitude, longitude, id],
    (err) => {
      if (err) {
        console.error(err.message);
        res.status(500).send('Internal server error');
      }
      res.send('Place updated successfully');
    }
  );
});

// DELETE-Endpunkt zum Löschen eines Orts
app.delete('/orte/:id', (req, res) => {
  const id = req.params.id;

  db.run('DELETE FROM places WHERE id = ?', id, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Fehler beim Löschen des Eintrags.');
    } else {
      res.status(200).send('Eintrag erfolgreich gelöscht.');
    }
  });
});