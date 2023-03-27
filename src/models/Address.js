module.exports = (sequelize, DataTypes) =>{
    const Address = sequelize.define("Address", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        publicPlace:{
            type: DataTypes.STRING,
            allowNull: false
        },
        number:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        complement:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        neighborhood:{
            type: DataTypes.STRING(90),
            allowNull: false
        },
        reference:{
            type: DataTypes.STRING(255),
            allowNull: false
        },
        zipCode:{
            type: DataTypes.STRING(10),
            allowNull: false
        },
        
       
    },{
        tableName: "addresses",
        timestamps: true
    });

    return Address;
}