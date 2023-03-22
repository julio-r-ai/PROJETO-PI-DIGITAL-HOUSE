module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        name_producto: {        
            type: DataTypes.STRING,
            allowNull: false
        },
        preco: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        stock: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'produto',
        timestamps: false
    })

    return Product;

}