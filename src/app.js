const express = require('express');

const path = require('path');
const homeRouter = require('./routes/home')

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set("views", path.resolve("src", "views"));
app.use(express.json());
app.use(express.static(path.resolve("src", "public")));

app.use(homeRouter);

app.get('/', (req, res) =>{
    res.render("home.ejs");
})


app.listen(port, () => console.log (`Servidor funcionando na porta ${port}`))