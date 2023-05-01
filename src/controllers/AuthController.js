const { Usuario, Endereco } = require('../models');
const { param } = require('express-validator');
const isAdmin = require('../middlewares/isAdmin');
const bcrypt = require('bcryptjs');
const { use } = require('../routes/homeRouter');
let salt = bcrypt.genSaltSync(10)

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
        const {name, tel, email, password, passworCheck, publicplace, number, complement, neighborhood, reference, zipcode} = req.body;
        
        const resulEmail = await Usuario.findOne({
            where:{
                email: email
            }
        }) 

        if(name === '' || tel === '' || email === '' || password === '' || passworCheck === '' || publicplace === '' || number === '' || complement === '' || neighborhood === '' || reference === '' || zipcode === ''){

            return res.render('auth/cadastro', {error: 'Preencha todos os campos'})

        }else if(password !== passworCheck){
            return res.render('auth/cadastro', {error: 'Senha não confere'})
        }else if(resulEmail === null){
            const passwordCripto = bcrypt.hashSync(password, salt);

            const enderecoCriado = await Endereco.create({
                publicplace, 
                number, 
                complement, 
                neighborhood, 
                reference, 
                tel,
                zipcode
            })

            await Usuario.create({
                name,
                email,
                password: passwordCripto,
                isAdmin: false,
                enderecoId: enderecoCriado.get("id")
            })
           
            return res.redirect('/login');  
        }else{
            return res.render('auth/cadastro', {error: 'Usuario ou senha ja existe'})
        }  

    },

    login: async (req, res)=>{
        const {email, password} = req.body;

        //const passwordValid = await bcrypt.compareSync(password, Usuario.password)
        //console.log('RESULTADO DA SENHA COMPARADA: ', passwordValid)

        const user = await Usuario.findOne({
            attributes: ['name','email', 'password', 'id', 'isAdmin'],
            where:{
                email: email,
                password: password
                
            }
        });

        

        if(!user || !password === null){
            return res.render("auth/login", {error: "Email esta incorreto ou senha esta incorreta."});
        }else{
            req.session.user = user; 
            
            if(user.isAdmin){
                return res.redirect('/admin/home'); 
            }else{
                return res.redirect('/home');
            }
             
        }; 
    } 
};

module.exports = AuthController;