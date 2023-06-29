const { DataTypes, Model} = require ('sequelize') 
const sequelize = require ('../bd')
class usuario extends Model{} 
usuario.init({ 
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
    modelName:'Usuario' 
} 
) 
sequelize.sync()
module.exports = usuario 