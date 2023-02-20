const getInfoFromDatabase = require('../utils/getInfoFromDatabase')
const {randomUUID} = require('crypto')
const path = require('path')
const fs = require('fs')


const UsersController = {

 listAll:  (req,res) => {
    const users = getInfoFromDatabase('users')
    return res.json(users)
    

 },

   listOne: (req, res) => {

      const {id} = req.params
      const users = getInfoFromDatabase("users");
      const userFound = users.find((user)=>  user.id === id )

      if(!userFound){

         res.status(404).json({message: "Não existe nenhum usuário com esse id"});

      }

      return res.json(userFound)
   },

   create: (req, res)=>{

      const {name, age} = req.body

      const newUser ={
         id: randomUUID(),
         name,
         age,
         status: true

      };

      const users = getInfoFromDatabase("users");

      const usersUpdated = [...users, newUser];

      const usersUpdatedJSON = JSON.stringify(usersUpdated)

      const filePath = path.join(__dirname, '..', 'model', "users.json");
      const readFromFile = fs.readFileSync(filePath,"utf-8");

      fs.writeFileSync(filePath,usersUpdatedJSON)

      return res.status(201).json({message: "O usuário foi criado com sucesso"});
   },

   delete: (req, res) =>{
      const {id} = req.params;
      const users = getInfoFromDatabase("users");
      const userFound = users.find((user)=>  user.id === id )

      const usersFiltered = users.filter((user)=> user.id !== id)

      const usersUpdatedJSON = JSON.stringify(usersFiltered);
      const filePath = path.join(__dirname, '..', 'model', "users.json");

      fs.writeFileSync(filePath, usersUpdatedJSON);

      return res.json({message: "O usuário foi deletado com sucesso"});

   }

}; 

module.exports = UsersController;