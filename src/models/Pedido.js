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
      Pedido.belongsToMany(models.Produto,{ through: 'ProdutoPedido' })
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
    },
    
    price:{ 
      type: DataTypes.FLOAT,
      allowNull: false
    },
    
  }, {
    sequelize,
    modelName: 'Pedido',
    tableName: "pedido",
  });
 
  return Pedido;
};