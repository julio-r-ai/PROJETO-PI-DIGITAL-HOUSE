const User = require('../model/usersModel')
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
        const {fullname, tel, email, password, publicplace, number, complement, neighborhood, reference, zipcode} = req.body;

        const verifyExists = User.findOne(email);

        if(verifyExists){
            return res.render('auth/cadastro', {error: "Nao e possivel realizar operacao"})
        }

        const psw = bcrypt.hashSync(password, 10);              

        const newUser = {
            fullname, 
            tel, 
            email, 
            psw, 
            publicplace, 
            number, 
            complement, 
            neighborhood, 
            reference, 
            zipcode
        };

        User.create(newUser);

        return res.redirect('/admin/login');  
    },

    login: (req, res)=>{
        const {email, password} = req.body;

        const user = User.findOne(email);
        const psw = User.verifyPassword(password)

        //const verifyPassword = bcrypt.compareSync(password, user.password);

        if(!user || !psw){
            return res.render("auth/login", {error: "Email esta incorreto ou senha esta incorreta."});
        }

        return res.redirect('/');
    }

}

module.exports = AuthController;