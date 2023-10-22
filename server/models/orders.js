const {DataTypes}=require('sequelize')
const {sequelize}=require('../util/database')

module.exports={
    Orders:sequelize.define('orders',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        user_id:DataTypes.INTEGER,
        item_id:DataTypes.INTEGER,
        date:DataTypes.DATE
    })
}