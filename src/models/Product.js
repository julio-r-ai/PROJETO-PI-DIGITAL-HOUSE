module.exports = (sequelize, DataTypes) =>{
    const Product = sequelize.define("Product", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        price:{
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        active:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        description:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        image:{
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        orderId:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },{
        tableName: "products",
        timestamps: true
    });

    Product.associate = (models)=>{
        Product.belongsTo(models.Order, {
            foreignKey: "orderId",
            as: "order"
        });

    }


    return Product;
}
