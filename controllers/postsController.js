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
    const { id } = req.params;

    const postSql = "SELECT * FROM posts WHERE id = ?";
    const tagSql = `SELECT * FROM tags JOIN post_tag ON post_tag.tag_id = tag.id WHERE post_tag.post_id = ?`

    connection.query(postSql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: "Database query failed: " + err });

        if (result.length === 0) return res.status(404).json({ error: "Post non trovato" })

        const post = result[0];

        connection.query(tagSql, [id], (err, tagResult) => {
            if (err) return res.status(500).json({ error: "Database query failed: " + err });

            post.tags = tagResult;

            res.json(post);
        })
    })
    //const id = req.params.id;
    //connection.query("SELECT * FROM posts WHERE id = ?", [id], (err, results) => {
    //    if (err) {
    //        return res.status(500).json({ error: "Errore nella query: " + err });
    //    }
    //    if (results.length === 0) {
    //        return res.status(404).json({ message: "Post non trovato" });
    //    }
    //    res.json(results[0]);
    //});
};

// DESTROY
const destroy = (req, res) => {
    const id = req.params.id;
    connection.query("DELETE FROM posts WHERE id = ?", [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Errore nella query: " + err });
        }
        res.status(204).send(); // Nessun contenuto
    });
};

module.exports = { index, show, destroy };