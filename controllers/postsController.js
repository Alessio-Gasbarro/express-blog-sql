const connection = require('../data/db');

// INDEX
const index = (req, res) => {
    connection.query("SELECT * FROM posts", (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database Query non ha voglia di funzionare, l'errore è: " + err });
        }
        res.json(results);
    });
};

// SHOW
const show = (req, res) => {
    const id = req.params.id;
    connection.query("SELECT * FROM posts WHERE id = ?", [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Errore nella query: " + err });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: "Post non trovato" });
        }
        res.json(results[0]);
    });
};

module.exports = { index, show };