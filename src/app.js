const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session')


const { home } = require('./controllers/HomeController');
const homeRouter = require('./routes/homeRouter');
const usersRouter = require('./routes/usersRouter');
const authRouter =  require('./routes/authRouter');
const adminRouter = require('./routes/adminRouter');
const requestLog = require('./middlewares/requestLog');
const path = require('path');
const { request } = require('http');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set("views", path.resolve("src", "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(methodOverride('_method'));

app.use(express.static(path.resolve("src", "public")));

app.use((session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
})));

app.use(requestLog);

app.use(homeRouter);
app.use(usersRouter);
app.use(authRouter);
app.use(adminRouter);

app.use((req, res, next)=>{
    return res.status(404).render('not-found');
});

app.listen(port, () => console.log(`Servidor funcionando na porta ${port}`));