const isLogado = (req, res, next) => {
    const use = res.locals.user

    if(use === undefined){
        res.render('auth/login', {error: 'Você precisa logar'} )
    }
}

module.exports = isLogado;