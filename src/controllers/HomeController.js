
const HomeController = {
    home: (req, res) =>{
        return res.render('home')
    },

    bolos: (req, res) =>{
        return res.render('bolos')
    },
    
    contato: (req, res)=>{
        return res.render('contato')
    },

    sobre: (req, res)=>{
        return res.render('sobre')
    },
    carrinho: (req, res)=>{
        return res.render('carrinho')
    },

    login:(req, res)=>{
        res.render('login')
    },

    cadastro:(req, res)=>{
        res.render('cadastro')
    },

    admin:(req, res)=>{
        res.render('admin')
    }
}


module.exports = HomeController;