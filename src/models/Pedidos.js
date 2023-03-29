const { Usuario, Produto } = require("../models");

module.exports = (sequelize, DataTypes) => {
    const Pedidos = sequelize.define('Pedidos', {

        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        usuarioId:{
            type: DataTypes.INTEGER,
            references: {
            model: Usuario, 
            key: 'id'
            }
        },
        produtoId:{
            type: DataTypes.INTEGER,
            references: {
            model: Produto, 
            key: 'id'
            }
        }  

    }, {
        tableName: 'pedidos',
        timestamps: false
    })

    Pedidos.associate = (models) => {
        Pedidos.hasOne(models.Usuario, {foreignKey: 'usuarioId'});
    };

    Pedidos.associate = (models) => {
        Pedidos.hasOne(models.Produto, {foreignKey: 'produtoId'});
    };

    return Pedidos;
}
