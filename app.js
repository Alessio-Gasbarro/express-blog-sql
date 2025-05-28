const express = require('express');
const app = express();
const port = 3000;
//Importo router
const postsRouter = require("./routers/posts.js");

app.use(express.static("public"));
app.use(express.json());

//Entry Point
app.get("/", (req, res) => {
    console.log("Server del mio Blog")
    res.send("Benvenuti nel mio Blog")
});

app.use("/posts", postsRouter);

app.listen(port, () => {
    console.log(`server in ascolto alla porta ${port}`);
});