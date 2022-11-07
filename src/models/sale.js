import {user} from "./user"
import {product} from "./product"
class Sale extends Model {}

Sale.init({
    id:{
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    date:{
        type: DataTypes.STRING,
        allowNull: false
    },
    client:{
        type: DataTypes.user,
        allowNull: false,
    },
    product:{
        type: DataTypes.product,
        allowNull: false
    },
    value:{
        type: DataTypes.STRING,
        allowNull: false
    }  
},
{
    sequelize,
    modelName: 'Sale',
    freezeTableName: true,    
    tableName: 'sales',
    timestamps: true,  
    createdAt: true,  
    updatedAt: 'updateTimestamp'
}
)

export default Sale;