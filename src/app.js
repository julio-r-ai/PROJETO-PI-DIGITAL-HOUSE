const express = require('express');
const methodOverride = require('method-override')

const path = require('path');
const { home } = require('./controllers/HomeController');
const homeRouter = require('./routes/homeRouter')
const UsersRouter = require('./routes/usersRouter')
const AdminRouter = require('./routes/adminRouter.js')



const app = express();
const port = 3000;

app.use(express.json());
app.use(homeRouter);
app.use(UsersRouter);
app.use(AdminRouter);




app.set('view engine', 'ejs');
app.set("views", path.resolve("src", "views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'))
app.use(express.static(path.resolve("src", "public")));

app.get('/', (req, res) =>{
    res.render("home.ejs");
}),

app.get('/', (req, res)=>{
    res.render("dashboard.ejs")
})

app.listen(port, () => console.log (`Servidor funcionando na porta ${port}`))
