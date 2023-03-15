const User = require('../model/usersModel')
const bcrypt = require('bcryptjs');

const AuthController ={

    showCadastroUsuario: (req, res) => {
        res.render('auth/cadastro')
    },

    showLogin: (req, res)=>{
       return  res.render('auth/login')
    },

    store:(req, res) => {
        const {name, tel, email, cpf, password, termo} = req.body;

        const verifyExists = User.findOne(email);

        if(verifyExists){
            return res.render('auth/cadastro', {error: "Nao e possivel realizar operacao"})
        }

        const hash = bcrypt.hashSync(password, 10);

        const newUser = {name, tel, email, cpf, hash, termo};
        User.create(newUser)

        return res.redirect('/admin/login') 

    },

    login: (req, res)=>{

        const {email, password} = req.body;
        const user = User.findOne(email);
        const verifyPassword = bcrypt.compareSync(password, user.password);

        if(!user || !verifyPassword){
            return res.render("auth/login", {error: "Email esta incorreto ou senha esta incorreta."});
        }

        return res.redirect('/');
        
        /* const users = usersModel.findAll();
        const {email, password} = req.body
        
        const userFound = users.find((user)=> user.email === email)

        if(!userFound){

            console.log('Usuário não existe')
            return 

        }

        const isValidPassword = userFound.password === password
        if(!isValidPassword){

            console.log('Email ou senha inválida')
            return
        }
        if(!userFound.isAdmin){
            return res.redirect('/')
        }
        return res.redirect('/admin/home') */

    }


}

module.exports = AuthController;