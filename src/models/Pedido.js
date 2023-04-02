'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pedido.belongsTo(models.Usuario, {foreignKey: 'usuarioId'})
      Pedido.belongsTo(models.Produto ,{foreignKey: 'produtoId' })
    }
  }
  Pedido.init({
      usuarioId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
      model: "Usuario",
      key: "id",
      },
      produtoId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
        model: "Produto",
        key: "id",
        },
      } 
    },
    
    price:{ 
      type: DataTypes.STRING,
      allowNull: false
    },
    
  }, {
    sequelize,
    modelName: 'Pedido',
    tableName: "pedido",
  });
 
  return Pedido;
};