const { DataTypes, Model} = require ('sequelize') 
const sequelize = require ('../bd')
class tipos extends Model{} 
tipos.init({ 
   nome: { 
        type: DataTypes.STRING(50), 
        allowNull:false  
    } , 
    email: { 
        type: DataTypes.STRING(50), 
        allowNull:false  
    } , 
    senha: { 
        type: DataTypes.STRING, 
        allowNull:false  
    } ,  
},{ 
    sequelize, 
    modelName:'tipos' 
} 
) 
