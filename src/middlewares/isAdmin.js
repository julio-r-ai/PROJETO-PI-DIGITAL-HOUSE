const isAdmin = (req, res, next)=>{
    const {user} = req.session;

    if (!user || user.isAdmin){
        return res.redirect('/')
    }  
    
    if (req.session.user){
        res.locals.user = req.session.user;
    }
    return next();
}

module.exports = isAdmin;
