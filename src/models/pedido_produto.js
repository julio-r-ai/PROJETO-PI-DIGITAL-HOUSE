"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pedido_Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pedido_Produto.hasOne(models.Pedido, { foreignKey: "pedidoId" });
      Pedido_Produto.hasOne(models.Produto, { foreignKey: "produtoId" });
    }
  }
  Pedido_Produto.init(
    {
      pedidoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Pedido",
          key: "id",
        },
      },
      produtoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Produto",
          key: "id",
        },
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Pedido_Produto",
      tableName: "pedido_produto",
    }
  );

  return Pedido_Produto;
};
