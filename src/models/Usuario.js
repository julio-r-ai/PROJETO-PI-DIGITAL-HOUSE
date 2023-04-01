const { Endereco } = require("./index");

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "Usuario",
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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isAdmin: {
        type: DataTypes.TINYINT,
        allowNull: false,
      },
       enderecoId: {
         type: DataTypes.INTEGER,
         references: {
          model: Endereco,
          key: "id",
        },
       },
    },
    {
      tableName: "usuario",
      timestamps: false,
    }
  );

  Usuario.associate = (models) => {
        Usuario.hasOne(models.Endereco, {foreignKey: 'enderecoId'});
    };

  return Usuario;
};
