//import { DataTypes, Model } from 'sequelize';
//import sequelize from '../conf/sequelize.js';

class User extends Model {}

User.init({
    id:{
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    documentType:{
        type: DataTypes.STRING,
        allowNull: false
    },
    documentId:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    firstName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    userName:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,

    },
    role:{
        type: DataTypes.STRING,
        allowNull: false
    },
    status:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
},
{
    sequelize,
    modelName: 'User',
    freezeTableName: true,    
    tableName: 'users',
    timestamps: true,  
    createdAt: true,  
    updatedAt: 'updateTimestamp'
}
)

export default User;