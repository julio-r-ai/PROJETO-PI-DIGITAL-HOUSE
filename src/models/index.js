const Sequelize = require('sequelize')

const sequelize = new Sequelize('bolos','root','felipe22081955$',{
  host: 'localhost', dialect: 'mysql'

})

sequelize.authenticate().then(function(){
      console.log('conexão realizada com sucesso');

}).catch(function(err){

  console.log('Erro de conexão no banco de dados' + err);

})


const Product = sequelize.define('Product', {

      name:{
      type: Sequelize.STRING,
      allowNull: false

},
      price: {
      type: Sequelize.DECIMAL,
      allowNull: false
},

      image: {
      type: Sequelize.STRING,
      allowNull: false
},

     active: {
     type: Sequelize.TINYINT,
     allowNull: false
},

     stock: {
     type: Sequelize.TINYINT,
     allowNull: false
},

     description: {
     type: Sequelize.STRING,
     allowNull: false
},


})




const User = sequelize.define('User', {

  name:{
  type: Sequelize.STRING,
  allowNull: false

},

email:{
  type: Sequelize.STRING,
  allowNull: false

},

password:{
  type: Sequelize.STRING,
  allowNull: false

},
  isAdmin:{
  type: Sequelize.TINYINT,
  allowNull: false

},

})





const Endereco = sequelize.define('Endereco', {

  publicplace:{
  type: Sequelize.STRING,
  allowNull: false

  },

  complement:{
    type: Sequelize.STRING,
    allowNull: false
  
    },

    neighborhood:{
      type: Sequelize.STRING,
      allowNull: false
    },

      reference:{
      type: Sequelize.STRING,
      allowNull: false
    },

    zipcode:{
      type: Sequelize.STRING,
      allowNull: false

    }

})

//Endereco.sync({force: true})


Endereco.create({
  publicplace: "Felipe"
})





