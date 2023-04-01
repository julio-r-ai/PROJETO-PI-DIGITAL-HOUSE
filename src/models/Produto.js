module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define(
    "Produto",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stock: {
        type: DataTypes.TINYINT,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "produto",
      timestamps: false,
    }
  );
  Produto.associate = (models) => {
    Produto.belongsTo(models.Pedido_Produto, { foreignKey: "produtoId" });
  };
  return Produto;
};
