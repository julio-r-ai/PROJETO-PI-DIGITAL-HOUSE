const isAdmin = (req, res, next)=>{
    const {user} = req.session;
    
    if(!user.isAdmin){
        return res.redirect('/home')
    }
    
    if(req.session.user){
        res.locals.user = req.session.user;
    }
    return next();
}

module.exports = isAdmin;
