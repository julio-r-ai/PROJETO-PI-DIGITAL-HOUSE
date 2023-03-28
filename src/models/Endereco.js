const { Usuario } = require('./index');

module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define('Endereco', {

        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        publicplace: {        
            type: DataTypes.STRING,
            allowNull: false
        },
        number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        complement: {
            type: DataTypes.STRING,
            allowNull: false
        },
        neighborhood: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reference: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tel: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'endereco',
        timestamps: false
    })

    Endereco.associate = (models) => {
        Endereco.belongsTo(models.Usuario, {foreignKey: 'addressId'});
    };

    return Endereco;

}