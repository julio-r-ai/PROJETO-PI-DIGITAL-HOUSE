module.exports = (sequelize, DataTypes)=>{
    const Order = sequelize.define("Order", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        userId:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{
        tableName: "orders",
        timestamps: true
    });

    Order.associate = (models)=>{
        Order.belongsTo(models.User, {
            foreignKey: "userId",
            as: "user"
        });

        
    }

    return Order;
}