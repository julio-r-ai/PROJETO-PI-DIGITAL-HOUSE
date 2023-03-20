const User = require('../database/usersModel')
const bcrypt = require('bcryptjs');

const AuthController ={

    showCadastroUsuario: (req, res) => {
        res.render('auth/cadastro')
    },

    showLogin: (req, res)=>{
       return  res.render('auth/login')
    },

    showAdminLogin: (req, res) => {
        return res.render('loginAdmin')
    },

    createUsuarios:(req, res) => {
        const {name, tel, email, password, publicplace, number, complement, neighborhood, reference, zipcode, isAdmin} = req.body;

        const verifyExists = User.findOne(email);

        if(verifyExists){
            return res.render('auth/cadastro', {error: "Nao e possivel realizar operacao"})
        }

        const psw = bcrypt.hashSync(password, 10);              

        const newUser = {
            name, 
            tel, 
            email, 
            psw, 
            publicplace, 
            number, 
            complement, 
            neighborhood, 
            reference, 
            zipcode,
            isAdmin
        };

        User.create(newUser);

        return res.redirect('/login');  
    },

    login: (req, res)=>{
        const {email, password} = req.body;

        const user = User.findOne(email);
        const verifyPassword = bcrypt.compareSync(password, user.password)



        if(!user || !verifyPassword){
            return res.render("auth/login", {error: "Email esta incorreto ou senha esta incorreta."});
        }

        req.session.user = user;

        return res.redirect('/admin/home');
    }

}

module.exports = AuthController;