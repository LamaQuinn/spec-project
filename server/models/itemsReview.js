const {DataTypes}=require('sequelize')
const {sequelize}=require('../util/database')

module.exports={
    Review:sequelize.define('review',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        user_id:DataTypes.INTEGER,
        item_id:DataTypes.INTEGER,
        star_rating:DataTypes.INTEGER
    })
}