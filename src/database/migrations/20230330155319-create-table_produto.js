'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('produto',{
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {        
      type: Sequelize.STRING,
      allowNull: false
  },
 
  price:{
      type: Sequelize.STRING,
      allowNull: false
  },
  stock:{
      type: Sequelize.TINYINT,
      allowNull: false
  },
  active:{
      type: Sequelize.BOOLEAN,
      allowNull: false
  },
  description:{
      type: Sequelize.STRING,
      allowNull: false,
  },
  image:{
      type: Sequelize.STRING,
      allowNull: false,
  },
 
  });

}, 


  async down (queryInterface, Sequelize) {

    await queryInterface.dropAllTables('produto')
  
  }
    
};
