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
        //const psw = await bcrypt.hash(password, 10);

        const resul = await Usuario.findOne({
            where:{
                email: email
            }
        })
      
        if(resul === null){
            await Usuario.create({
                name,
                tel,
                email,
                password,
                isAdmin: isAdmin === "on"? true : false
            })
            
            return res.redirect('/login');  

        }else{
            return res.redirect('/cadastro')
            console.log('Usuario invalido')
        }  

    },

    login: async (req, res)=>{
        const {email, password} = req.body;

        const user = await Usuario.findOne({
            attributes: ['email', 'password'],
            where:{
                email: email
            }
        })

        const psw = await Usuario.findOne({
            attributes: ['email', 'password'],
            where:{
                email: password
            }
        });

        //const verifyPassword = bcrypt.compareSync(password, user.password)
        if(!user || !psw === null){
            return res.render("auth/login", {error: "Email esta incorreto ou senha esta incorreta."});
        }else{
            req.session.user = user; 

            return res.redirect('/admin/home');  
        }
    } 
}

module.exports = AuthController;