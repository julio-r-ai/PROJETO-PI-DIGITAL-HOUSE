module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {

        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {        
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tel: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isAdmin: {
            type: DataTypes.TINYINT, 
            allowNull: false 
        }

    }, {
        tableName: 'usuarios',
        timestamps: false
    })

    return Usuario;

}