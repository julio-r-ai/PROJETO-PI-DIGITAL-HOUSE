const database = require('../database/db.json');

const AdminController = {
    showHome: (req,res) =>{
        return res.render('admin')
    }
}
