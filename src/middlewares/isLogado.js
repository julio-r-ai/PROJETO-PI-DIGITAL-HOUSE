const isLogado = (req, res, next) => {
    const use = res.locals.user
    
    if(use === undefined){
       return res.render('auth/login', {error: 'Você precisa logar'} )
    }

    return next();
}

module.exports = isLogado;