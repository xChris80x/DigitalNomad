
// Express Server 

const express = require("express");
const app = express();
const db = require('../database/db');
const bodyParser = require('body-parser');
const HTTP_PORT = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(HTTP_PORT, () => {
  console.log(`Server is running on Port ${HTTP_PORT}`);
});


// GET-Endpoint to get all places


app.get('/api/orte', (req, res) => {
  db.all('SELECT * FROM places', [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
    } else {
      res.send(rows);
    }
  });
});

// POST-Endpoint to add a new place

// Eine asynchrone Route-Handler-Funktion erstellen
app.get('/places', async (req, res) => {
  try {
    // Eine Datenbankabfrage ausführen und auf das Ergebnis warten
    const rows = await db.all('SELECT * FROM placed');

    // Das Ergebnis an den Client senden
    res.json(rows);
  } catch (err) {
    // Fehlerbehandlung
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.post('/api/ort', (req, res) => {
  const { id, name, description, latitude, longitude } = req.body;

  db.run(
    'INSERT INTO places (id , name, description, latitude, longitude) VALUES (?, ?, ?, ?)',
    [name, description, latitude, longitude],
    (err) => {
      if (err) {
        console.error(err.message);
        res.status(500).send('Internal server error');
      } else {
        res.send('Place added successfully');
      }
    }
  );
});

// PUT-Endpoint to update a place
app.put('/api/ort/:id', (req, res) => {
  const { name, description, latitude, longitude } = req.body;
  const id = req.params.id;

  db.run(
    'UPDATE places SET name = ?, description = ?, latitude = ?, longitude = ? WHERE id = ?',
    [name, description, latitude, longitude, id],
    (err) => {
      if (err) {
        console.error(err.message);
        res.status(500).send('Internal server error');
      } else {
        res.send('Place updated successfully');
      }
    }
  );
});

// DELETE-Endpoint to delete a place
app.delete('/api/orte/:id', (req, res) => {
  const id = req.params.id;

  db.run('DELETE FROM places WHERE id = ?', id, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error deleting entry.');
    } else {
      res.status(200).send('Entry deleted successfully.');
    }
  });
});

module.exports = app;
