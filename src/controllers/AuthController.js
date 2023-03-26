const User = require('../database/usersModel')
const bcrypt = require('bcryptjs');

const { Usuario } = require('../models');


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

    createUsuarios: async (req, res) => {
        const {name, tel, email, password, isAdmin} = req.body;
        // const psw = await bcrypt.hash(password, 10);

        await Usuario.create({
            name,
            tel,
            email,
            password,
            isAdmin: isAdmin === "on"? true : false
        })

        return res.redirect('/login');  
    },

    login: (req, res)=>{
        /* const {email, password} = req.body;

        const user = Usuario.findByPk(email);
        const verifyPassword = bcrypt.compareSync(password, user.password)

        if(!user || !verifyPassword){
            return res.render("auth/login", {error: "Email esta incorreto ou senha esta incorreta."});
        }

        req.session.user = user; */

        return res.redirect('/admin/home');
    } 

}

module.exports = AuthController;