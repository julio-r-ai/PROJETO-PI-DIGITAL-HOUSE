module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define("User", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING(90),
            allowNull: false
        },
    
        email:{
            type: DataTypes.STRING(90),
            allowNull: false
        },
        tel:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        password:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        
        is_admin:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        addressId:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        tableName: "users",
        timestamps: true
    });

    User.associate = (models)=>{
        User.belongsTo(models.Address, {
            foreignKey: "addressId",
            as: "address"
        });

        //User.hasMany(models.Order);
    }



    return User;
}
