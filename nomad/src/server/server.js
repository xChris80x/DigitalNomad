

// Express Server 


const express = require ("express");
const app = express();
const db = require ('\Database\db.js');
const HTTP_PORT = 3000;


app.listen(HTTP_PORT, () => {
console.log(`Server ist running on Port ${HTTP_PORT} `);
} );



//Express Enpoints/Methoden 

app.get("/api", (req, res) => {
res.json({message : "Läuft"});

});


app.get("/api/todo", (req, res) => {
    
});
    
app.get("/api/todo/:id", (req, res) => {      
});
        

app.post("/api/todo", (req, res) => {      
});


app.patch("/api/todo/:id", (req, res) => {      
});

app.delete("/api/todo/:id", (req, res) => {      
});

app.use((req, res) => {

res.status(404).json({
message: "Not available now"
});
});