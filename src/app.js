const express = require('express');
const methodOverride = require('method-override')
const UsersController = require('./controllers/UsersController')

const path = require('path');
const { home } = require('./controllers/HomeController');
const homeRouter = require('./routes/home')

const app = express();
const port = 3000;

app.use(express.json());

app.get("/users", UsersController.listAll);
app.get('/users/:id', UsersController.listOne);
app.post('/users', UsersController.create);
app.delete("/users/:id", UsersController.delete)



app.set('view engine', 'ejs');
app.set("views", path.resolve("src", "views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'))
app.use(express.static(path.resolve("src", "public")));

app.use(homeRouter);

app.get('/', (req, res) =>{
    res.render("home.ejs");
})


app.listen(port, () => console.log (`Servidor funcionando na porta ${port}`))
