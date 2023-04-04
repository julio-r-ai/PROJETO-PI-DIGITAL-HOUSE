const { Usuario, Endereco } = require('../models');
const { param } = require('express-validator');
const isAdmin = require('../middlewares/isAdmin');

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
        const {name, tel, email, password, publicplace, number, complement, neighborhood, reference, zipcode} = req.body;

        const resul = await Usuario.findOne({
            where:{
                email: email
            }
        })

       
      
        if(resul === null){
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
                password,
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