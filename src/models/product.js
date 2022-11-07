class Product extends Model {}

Product.init({
    id:{
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    units:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    sequelize,
    modelName: 'Product',
    freezeTableName: true,    
    tableName: 'products',
    timestamps: true,  
    createdAt: true,  
    updatedAt: 'updateTimestamp'
}

)

export default Product;