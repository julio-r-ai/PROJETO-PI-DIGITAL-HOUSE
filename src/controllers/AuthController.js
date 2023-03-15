const AuthController ={


    showLogin: (req, res)=>{
       return  res.render('auth/login')
    }

}

module.exports = AuthController;