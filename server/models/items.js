const {sequelize}=require('../util/database')
const {DataTypes}=require('sequelize')

module.exports={
    Items:sequelize.define('items',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        title:DataTypes.STRING,
        photo_url:DataTypes.STRING,
        price:DataTypes.STRING,
        favorites:DataTypes.BOOLEAN,
        categories:DataTypes.STRING
    })
}